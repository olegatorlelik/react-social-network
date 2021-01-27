import React, { useState } from "react";
import classes from "./Users.module.css";
import IconButton from "@material-ui/core/IconButton";
const Paginator = ({
  totalaUsersCount,
  pageSize,
  onPageChange,
  currentPage,
  portionSize = 10,
}) => {
  let pageCount = Math.ceil(totalaUsersCount / pageSize);
  let arrPages = [];

  for (let i = 1; i <= pageCount; i++) {
    arrPages.push(i);
  }

  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPorionNumber = portionNumber * portionSize;

  return (
    <div className={classes.wrapper}>
      {portionNumber > 1 && (
        <IconButton
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Назад
        </IconButton>
      )}
      <div>
        {arrPages
          .filter((p) => p >= leftPortionPageNumber && p <= rightPorionNumber)
          .map((elem) => {
            return (
              <span
                key={elem}
                onClick={(e) => {
                  onPageChange(elem);
                }}
                className={`${classes.pages} ${
                  currentPage === elem && classes.selectedPage
                }`}
              >
                {elem}
              </span>
            );
          })}
      </div>
      {portionCount > portionNumber && (
        <IconButton
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Вперед
        </IconButton>
      )}
    </div>
  );
};

export default Paginator;
