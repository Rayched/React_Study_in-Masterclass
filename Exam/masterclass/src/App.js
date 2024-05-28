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

const Emoticon = styled.span`
  font-size: 40px;

`;

const Box = styled.div`
  width: 100px; height: 100px;
  animation: ${animation} 5s linear infinite;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  /*
  span {
    &:hover {
      background-color: white;
    }
  }*/
  ${Emoticon} {
    //JS에서 변수를 전달하던 방식대로 Styled component 전달 가능
    &:hover {
      font-size: 60px;
      background-color: white;  
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoticon as="div">😎</Emoticon>
      </Box>
    </Wrapper>
  );
  /**
   * 기존 span 요소를 Emoticon이라는 styled-component로 대체하였음.
   */
}

export default App;