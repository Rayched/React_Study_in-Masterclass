import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.h2`
  font-size: 30px;
  //color: tomato;
  color: ${(props) => props.theme.textColor};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  //background-color: white;
  background-color: ${(props) => props.theme.backgroundColor};
  ${Title}{
    &:hover{
      border: 3px solid red;
      border: ${(props) => props.theme.borders};
      border-radius: 10px;
      padding: 5px;
      font-size: 45px;
    }
  }
`;

function App() {
  return (
    <div>
      <h2>Dark Mode 적용 (전환 불가)</h2>
      <Wrapper>
      <Box>
        <Title>Hello World</Title>
      </Box>
    </Wrapper>
    </div>
  );
  /**
   * 기존 span 요소를 Emoticon이라는 styled-component로 대체하였음.
   */
}

export default App;