import s from "./Pagination.module.scss";
import { Link } from "react-router-dom";
import paginator from "../../../utilites/paginator";

const Pagination = ({ numberOfPages, currentPage }) => {
  let pages = paginator(currentPage, numberOfPages);

  return (
    <div className={s.Pagination}>
      {pages.map((page, index) => {
        return page ? (
          <Link
            to={`/users/${page}`}
            key={page}
            className={
              page === currentPage ? `${s.page} ${s.active}` : s.page
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
