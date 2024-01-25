import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div>
      <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="flex">
          {arrNumber.map((value, i) => (
            <Box
              isSelected={value == selectedNumber}
              key={i}
              onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
          ))}
        </div>
        <p>Selecione um número</p>
      </NumberSelectorContainer>
    </div>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0px 50px 0px 0px;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    padding-top: 10px;
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
`;
