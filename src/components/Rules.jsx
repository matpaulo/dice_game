import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>Como jogar o Dice Game</h2>
      <div className="text">
        <p>
          Selecione um número. <br />
          Clique no dado para jogar o dado. <br />
          Depos de clicar no dado, se o número que você selecionou bater com o
          do dado, é adicionado 10 pontos na sua pontuação, caso você errar,
          perde 2 pontos.
        </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .text {
    margin-top: 24px;
  }
`;
