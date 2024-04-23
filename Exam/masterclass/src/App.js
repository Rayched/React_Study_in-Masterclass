import styled from "styled-components";

const Parents = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  color: white;
  border: 1px solid black;
  width: 100px; height: 100px;
  margin: 5px;
  text-align: center;
`;

const Btn = styled(Box)`
  border-radius: 30px;
`;

function App() {
  return (
    <Parents>
      <Box bgColor="tomato">Box</Box>
      <Btn bgColor="green" as="button">Btn</Btn>
    </Parents>
  );
}

export default App;