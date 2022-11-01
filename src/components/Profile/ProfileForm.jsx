import React, { useState } from "react";
import s from "./ProfileForm.module.scss";
import cn from "classnames";
import Preloader from "../common/Preloader/Preloader.tsx";

// Contact Field
const ContactField = ({ contactTitle, contactValue, editMode}) => {
  const [value, setValue] = useState(contactValue || "");
  return (
    <div className={s.box}>
      <p className={s.title}>{contactTitle} :</p>
      {editMode ? (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name={contactTitle}
          placeholder={`Your ${contactTitle}`}
          className={s.input}
        />
      ) : (
        <a className={s.value} href={contactValue} target="_blank">{contactValue}</a>
      )}
    </div>
  );
};

const ProfileForm = ({ profile, editable, editProfile, setProfileInfo }) => {
  //Edit Mode
  const [editMode, setEditMode] = useState(false);
  const [isFetching, setFetching] = useState(false);
  const [errors, setErrors] = useState([]);
  //Fields
  const [name, setName] = useState(profile.fullName || "");
  const [aboutMe, setAboutMe] = useState(profile.aboutMe || "");
  const [job, setJob] = useState(profile.lookingForAJob);
  const [jobDesc, setJobDesc] = useState(
    profile.lookingForAJobDescription || ""
  );

  //Submit callback
  const onSubmit = async (e) => {
    let profile = {
      fullName: e.target[0].value,
      aboutMe: e.target[1].value,
      lookingForAJob: e.target[2].checked,
      lookingForAJobDescription: e.target[3].value,
      contacts: {
        facebook: e.target[4].value,
        website: e.target[5].value,
        vk: e.target[6].value,
        twitter: e.target[7].value,
        instagram: e.target[8].value,
        youtube: e.target[9].value,
        github: e.target[10].value,
        mainLink: e.target[11].value,
      },
    };
    setFetching(true);
    const data = await editProfile(profile);
    setFetching(false);
    if (data.resultCode === 0) {
      setErrors([]);
      setEditMode(false);
      setProfileInfo(profile);
    }
    if(data.resultCode !== 0) {
      setErrors(data.messages);
    }
  };

  return (
    <form
      className={s.Form}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      {errors.map(err => {
        return (<div className={s.error}>{err}</div>)
      })}
        <div className={s.box}>
          <p className={s.title}>name: </p>
          {editMode ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="fullName"
              placeholder="Your name"
              className={s.input}
            />
          ) : (
            <p className={s.value}>{profile.fullName}</p>
          )}
        </div>

        <div className={s.box}>
          <p className={s.title}>About me: </p>
          {editMode ? (
            <textarea
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              name="aboutMe"
              placeholder="About you"
              className={s.textarea}
            />
          ) : (
            <p className={s.value}>{profile.aboutMe}</p>
          )}
        </div>

        {!editMode && (
          <div className={s.box}>
            <p className={s.title}>User Id: </p>
            <p className={s.value}>{profile.userId}</p>
          </div>
        )}

        <div className={s.box}>
          {editMode ? (
            <>
              <label className={cn(s.title, s.label)} htmlFor="job">
                Looking for a job:
              </label>
              <input
                checked={job}
                value={job}
                onChange={(e) => setJob(e.target.checked)}
                className={s.checkbox}
                name="lookingForAJob"
                id="job"
                type="checkbox"
              />
            </>
          ) : (
            <p className={s.job}>
              {profile.lookingForAJob ? "Looking for a job" : null}
            </p>
          )}
        </div>

        <div className={s.box}>
          <p className={s.title}>Skills: </p>
          {editMode ? (
            <textarea
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
              name="lookingForAJobDescription"
              placeholder="Your skills"
              className={s.textarea}
            />
          ) : (
            <p className={s.value}>{profile.lookingForAJobDescription}</p>
          )}
        </div>

        <div className={s.contacts}>
          {Object.keys(profile.contacts).map((contactTitle) => {
            return (
              (profile.contacts[contactTitle] || editMode) && (
                <ContactField
                  key={contactTitle}
                  contactTitle={contactTitle}
                  contactValue={profile.contacts[contactTitle]}
                  editMode={editMode}
                />
              )
            );
          })}
        </div>
        <Preloader isFetching={isFetching && editMode} />
        {editMode && !isFetching && (
          <button type="submit" className={s.submitBtn}>
            Save changes
          </button>
        )}
      {!editMode && editable && (
        <button onClick={() => setEditMode(true)} className={s.editEnableBtn}>
          Enable Edit mode
        </button>
      )}
      {editMode && (
        <button onClick={() => setEditMode(false)} className={s.editDisableBtn}>
          Disable Edit mode
        </button>
      )}
    </form>
  );
};

export default ProfileForm;
