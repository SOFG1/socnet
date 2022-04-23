import s from "./Users.module.scss";
import { Link } from "react-router-dom";

const Pagination = ({ pages, ...props }) => {
  return (
    <div className={s.pagination}>
      {pages.map((page, index) => {
        return page ? (
          <Link
            to={`/users/${page}`}
            key={page}
            className={
              page === props.current ? `${s.page} ${s.active}` : s.page
            }
          >
            {page}
          </Link>
        ) : (
          <span key={index - 0.5} className={s.dots}>
            ...
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
