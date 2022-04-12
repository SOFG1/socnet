import s from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";

const Friend = (props) => {
  return (
      <Link className={s.friend} to={`users/${props.friend.id}`}>
        <img
          src={props.friend.photos.small ? props.friend.photos.small : avatar}
          alt="User Avavtar"
          className={s.avatar}
        />
        <p className={s.name}>
          {props.friend.name}
        </p>
      </Link>
  );
};

export default Friend;
