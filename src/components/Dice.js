import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Rules from "./Rules";

const Dice = () => {
  const [score, setScore] = useState(0);
  const [active, setactive] = useState();
  const [num, setnum] = useState(1);
  const [IsRuleActive, setIsRuleActive] = useState(false);
  const [error, setError] = useState("");

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  const handleRand = () => {
    if (!active) {
      setError("You have not selected any number");
      return;
    }

    const rndInt = generateRandomNumber();
    setnum((prev) => rndInt);

    if (rndInt == active) {
      setScore((prev) => prev + num);
    } else {
      setScore((prev) => prev - 2);
    }
    setactive(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  const toggleRule = () => {
    setIsRuleActive((prev) => !prev);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          active={active}
          setactive={setactive}
        />
      </div>
      <RollDice
        toggle={toggleRule}
        num={num}
        handleRand={handleRand}
        resetScore={resetScore}
      />
      {IsRuleActive ? <Rules /> : toggleRule}
    </>
  );
};

export default Dice;
