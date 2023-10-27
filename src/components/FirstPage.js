import React from "react";
import style from "./FirstPage.module.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const FirstPage = ({ toggle }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.img_div}>
          <img className={style.dice_image} src="/images/dice.jpg" alt="dice" />
        </div>
        <div className={style.dice_text}>
          <h1>DICE GAME</h1>
          <Link className={style.play_link} to="/dice">
            <Button text="Play Now" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
