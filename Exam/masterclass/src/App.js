import styled from "styled-components";

const Parents = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: red;
  width: 100px; height: 100px;
`;

const BoxTwo = styled.div`
  background-color: blue;
  width: 100px; height: 100px;
`;

function App() {
  return (
    <Parents>
      <BoxOne>Box 1</BoxOne>
      <BoxTwo>Box 2</BoxTwo>
    </Parents>
  );
}

export default App;