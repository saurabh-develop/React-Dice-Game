import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={props.istrue ? style.btn2 : style.btn1}
      onClick={props.toggle}
    >
      {props.text}
    </button>
  );
};

export default Button;
