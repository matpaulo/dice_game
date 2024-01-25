import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <div>
        <h1>{score}</h1>
        <p>Pontuação Total</p>
      </div>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  padding: 0px 0px 0px 50px;
  h1 {
    font-size: 100px;
    line-height: 150px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
