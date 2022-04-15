import s from "./Profile.module.scss";
import avatar from "../../assets/avatar.png";
import Status from "../common/Status/Status";

const Profile = (props) => {
  const contacts = [];
  for (let contact in props.profile.contacts) {
    contacts.push(
      props.profile.contacts[contact] && (
        <p className={s.contact} key={contact}>
          {contact}: <span>{props.profile.contacts[contact]}</span>
        </p>
      )
    );
  }
  return (
    <div className={s.user}>
      <div className={s.left}>
        <img
          src={props.profile.photos.large ? props.profile.photos.large : avatar}
          alt="User Avatar"
          className={s.avatar}
        />
      </div>
      <div className={s.right}>
        <h1 className={s.name}>{props.profile.fullName}</h1>
        <Status
          status={props.status}
          readOnly={props.myId !== props.profile.userId}
          changeStatus={props.changeStatus}
        />
        <p className={s.about}>{props.profile.aboutMe}</p>
        {props.profile.lookingForAJob && (
          <p className={s.job}>Looking for a job</p>
        )}
        {contacts}
      </div>
    </div>
  );
};

export default Profile;
