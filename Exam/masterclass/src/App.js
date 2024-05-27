import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    background-color: red;
  }
  25% {
    transform: rotate(90deg);
    background-color: orange;
  }
  50% {
    transform: rotate(180deg);
    background-color: yellow;
  }
  75% {
    transform: rotate(270deg);
    background-color: green;
  }
  100% {
    transform: rotate(360deg);
    background-color: blue;
  }
`;

const Box = styled.div`
  width: 100px; height: 100px;
  animation: ${animation} 5s linear infinite;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 40px;
    &:hover {
      background-color: white;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😎</span>
      </Box>
    </Wrapper>
  );
}

export default App;