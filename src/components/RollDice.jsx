import styled from "styled-components";

const RollDice = ({ rollDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={() => rollDice()}>
        <img
          src={`/images/dice_${currentDice}.png`}
          alt={`dice+${currentDice}`}
        />
      </div>
      <p>Clique para jogar o dado</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
