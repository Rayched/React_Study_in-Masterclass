import styled from "styled-components";

const Parents = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  width: 300px;
  height: 300px;
`;

const Inputs = styled.input.attrs({
  type: "text", placeholder: "검색어를 입력해주세요."
})`
  border: 2px solid black;
  border-radius: 10px;
  width: 200px;
  height: 20px;
  margin: 3px;
`;

function App() {
  return (
    <Parents>
      <Inputs />
      <Inputs />
      <Inputs />
      <Inputs />
      <Inputs />
    </Parents>
  );
}

export default App;