import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    background-color: red;
  }
  50% {
    transform: rotate(180deg);
    background-color: yellow;
  }
  100% {
    transform: rotate(360deg);
    background-color: green;
  }
`;

const Box = styled.div`
  width: 200px; height: 200px;
  animation: ${animation} 2s linear infinite;
`;

const Box2 = styled.div`
  width: 100px; height: 100px;
  animation: ${animation} 3s linear;
  background-color: gray;
`;

function App() {
  return (
    <Wrapper>
      <Box />
      <Box2 />
    </Wrapper>
  );
}

export default App;