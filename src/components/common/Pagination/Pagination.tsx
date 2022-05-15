import React from "react";
import s from "./Pagination.module.scss";
import paginator from "../../../utilites/paginator";
import { useEffect, useState } from "react";
import cn from "classnames";

type PropsType = {
  numberOfPages: number
  currentPage: number
  changePage: (page:number)=> void
}


const Pagination:React.FC<PropsType> = ({ numberOfPages, currentPage, changePage }:PropsType) => {
  // Position of pagination
  let [position, setPosition] = useState(currentPage);

  useEffect(()=> {
    setPosition(currentPage)
  }, [currentPage]);

  // Pages array
  let pages:Array<number> = paginator(position, numberOfPages);
  // onPrev
  let incrementPosition = () => {
    setPosition(pos => pos + 10 > numberOfPages ? numberOfPages : pos + 10);
  }
  // onNext
  let decrementPosition = () => {
    setPosition(pos => pos - 10 < 0 ? 1 : pos - 10);
  }
  return (
    <div className={s.Pagination}>
      {position > 8 && <button onClick={decrementPosition} className={s.btn}>&lt;&lt;</button>}
      <div className={s.pages}>
      {pages.map((page:number, index:number) => {
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
