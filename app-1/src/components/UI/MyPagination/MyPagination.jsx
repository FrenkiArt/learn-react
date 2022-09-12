import React from "react";
import { useState } from "react";
import "./MyPagination.scss";

const MyPagination = ({ pagesArray, page, changePage }) => {
  return (
    <div className="pagination">
      {pagesArray.map((p) => {
        return (
          <div
            key={p}
            onClick={() => changePage(p)}
            className={
              page === p
                ? "pagination__item pagination__item--current"
                : "pagination__item"
            }
          >
            {p}
          </div>
        );
      })}
    </div>
  );
};

export default MyPagination;
