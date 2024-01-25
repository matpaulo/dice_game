import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice((prev) => randomNumber);
    if (!selectedNumber) {
      setError("Nenhum numéro selecionado");
      return;
    }
    setError("");
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutButton onClick={resetScore}>Recomeçar</OutButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>Regras</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 18px;
  background: black;
  color: white;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  transition: background-color 0.2s ease-out 100ms;
  cursor: pointer;
  &:hover {
    background-color: #383838;
  }
`;

const OutButton = styled.button`
  margin-top: 10px;
  padding: 10px 18px;
  background: white;
  color: black;
  border-radius: 5px;
  min-width: 220px;
  border: 1px solid black;
  font-weight: 600;
  font-size: 16px;
  transition: background-color 0.2s ease-out 100ms;
  cursor: pointer;
  &:hover {
    background-color: #a8a8a8;
    color: #2c2c2c;
  }
`;
