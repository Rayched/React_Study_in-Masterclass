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

const Circle = styled(Box)`
  border-radius: 50px; //New
`;

function App() {
  return (
    <Parents>
      <Box bgColor="red">Box 1</Box>
      <Circle bgColor="blue">Box 2</Circle>
    </Parents>
  );
}

export default App;