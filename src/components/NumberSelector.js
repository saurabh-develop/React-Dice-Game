import React from "react";
import style from "./Topscore.module.css";

const NumberSelector = (props) => {
  const handleclick = (event) => {
    props.setactive(event.target.id);
    props.setError("");
  };

  return (
    <div className={style.select_num}>
      <p style={{ color: "red", fontSize: 20 }}>{props.error}</p>
      <div className={style.numbers}>
        <button
          id={"1"}
          className={props.active === "1" ? style.active : style.undefined}
          onClick={handleclick}
        >
          1
        </button>
        <button
          id={"2"}
          className={props.active === "2" ? style.active : style.undefined}
          onClick={handleclick}
        >
          2
        </button>
        <button
          id={"3"}
          className={props.active === "3" ? style.active : style.undefined}
          onClick={handleclick}
        >
          3
        </button>
        <button
          id={"4"}
          className={props.active === "4" ? style.active : style.undefined}
          onClick={handleclick}
        >
          4
        </button>
        <button
          id={"5"}
          className={props.active === "5" ? style.active : style.undefined}
          onClick={handleclick}
        >
          5
        </button>
        <button
          id={"6"}
          className={props.active === "6" ? style.active : style.undefined}
          onClick={handleclick}
        >
          6
        </button>
      </div>

      <h2 style={{ paddingRight: 20 }}>Select Number</h2>
    </div>
  );
};

export default NumberSelector;
