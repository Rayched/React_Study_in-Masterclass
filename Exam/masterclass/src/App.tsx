import styled from "styled-components";

const Title = styled.h2`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh; width: 100vw;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Title>Hello World</Title>
      </Box>
    </Wrapper>
  );
}

export default App;