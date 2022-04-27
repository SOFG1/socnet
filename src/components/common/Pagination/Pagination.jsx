import s from "./Pagination.module.scss";
import paginator from "../../../utilites/paginator";
import { useEffect, useState } from "react";
import cn from "classnames";

const Pagination = ({ numberOfPages, currentPage, changePage }) => {
  // Position of pagination
  let [position, setPosition] = useState(currentPage);

  useEffect(()=> {
    setPosition(currentPage)
  }, [currentPage]);

  // Pages array
  let pages = paginator(position, numberOfPages);
  // onPrev
  let incrementPosition = () => {
    setPosition(pos => pos + 10 > numberOfPages ? numberOfPages : pos + 10);
  }
  // onNext
  let decrementPosition = () => {
    setPosition(pos => pos - 10 < 0 ? 1 : pos - 10);
  }
  //page === currentPage ? `${s.page} ${s.active}` : s.page
  return (
    <div className={s.Pagination}>
      {position > 8 && <button onClick={decrementPosition} className={s.btn}>&lt;&lt;</button>}
      <div className={s.pages}>
      {pages.map((page, index) => {
        return page ? (
          <button
            onClick={()=> changePage(page)}
            key={page}
            className={cn(s.page, {[s.active]: page === currentPage})}
          >
            {page}
          </button>
        ) : (
          <span key={index - 0.5} className={s.dots}>
            ...
          </span>
        );
      })}
      </div>
      {position + 7 < numberOfPages && <button onClick={incrementPosition} className={s.btn}>&gt;&gt;</button>}
    </div>
  );
};

export default Pagination;
