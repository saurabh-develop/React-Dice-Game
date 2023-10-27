import React from "react";
import style from "./Topscore.module.css";

const TotalScore = (props) => {
  return (
    <>
      <div className={style.score}>
        <h1 className={style.totScore} style={{ textAlign: "center" }}>
          {props.score}
        </h1>
        <h2>Total Score</h2>
      </div>
    </>
  );
};

export default TotalScore;
