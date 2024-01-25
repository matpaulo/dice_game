import React from "react";
import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dicesimg" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>PLAY NOW</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
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
