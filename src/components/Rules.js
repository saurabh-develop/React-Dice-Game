import React from "react";
import style from "./Rule.module.css"

const Rules = () => {
  return (
    <>
      <div className={style.rule}>
        <h3>How to play dice game</h3>
        <span>
          <ol>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              After click on dice if selected number is equal to dice number you
              will get same point as dice
            </li>
            <li>If you get wrong guess then 2 point will be dedcuted</li>
          </ol>
        </span>
      </div>
    </>
  );
};

export default Rules;
