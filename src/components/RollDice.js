import React from "react";
import Button from "./Button";
import style from "./Dice.module.css";
import Button2 from "./Button2";

const RollDice = (props) => {
  return (
    <div className={style.dice_container}>
      <button onClick={props.handleRand} className={style.dice_btn}>
        <img src={`./images/dice(${props.num}).png`} alt="dice" />
      </button>

      <div className={style.dice_content}>
        <h3 style={{ textAlign: "center" }}>Click on Dice to roll</h3>

        <Button2
          resetScore={props.resetScore}
          istrue="true"
          text="Reset Score"
        />

        <Button toggle={props.toggle} text="Show Rules"></Button>
      </div>
    </div>
  );
};

export default RollDice;
