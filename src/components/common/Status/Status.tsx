import React, { useEffect, useState } from "react";
import { statusValidator } from "../../../utilites/validators";
import s from "./Status.module.scss";

type PropsType = {
  status: string
  readOnly: boolean
  changeStatus: (status:string)=> void
}

const Status: React.FC<PropsType> = (props)=> {
  const [status, setStatus] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(false);
  useEffect(()=> {
    setStatus(props.status)
  }, [props])
  let onChange= (e: React.SyntheticEvent)=> {
    setStatus(e.target.value);
    setError(!statusValidator(e.target.value));
  }
  let toggleEdit = ()=> {
    if (!props.readOnly) {
      setEditMode(mode => !mode)
    }
  }
  let onBlur = (e: React.SyntheticEvent)=> {
    const valid = statusValidator(e.target.value);
    if (valid) {
      setStatus(props.status);
      setEditMode(mode => !mode);
    }
    if (props.status !== status && valid) {
      props.changeStatus(e.target.value);
    }
    if (!statusValidator(e.target.value)) {
      setError(true)
    }
  }
  return (
    (props.status || !props.readOnly) &&
    <div
      className={
        props.readOnly ? s.statusBox : `${s.statusBox} ${s.editable}`
      }
      onClick={toggleEdit}
    >
      {editMode ? (
        <input
        className={s.input}
          type="text"
          value={status}
          onChange={onChange}
          onBlur={onBlur}
          autoFocus
        />
      ) : (
        <p className={s.status}>
          {status}
          {status.length === 0 && !props.readOnly && (
            <span className={s.empty}>Click to set the status...</span>
          )}
        </p>
      )}
      {error && (
        <p className={s.error}>
          Status must container letters or numbers and not exceed 300
          characters
        </p>
      )}
    </div>
  )
} 


export default Status;
