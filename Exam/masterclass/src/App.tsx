import { validateHeaderValue } from "http";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  font-weight: bold;
  height: 100px;
`;

const SearchBar = styled.input.attrs(
  {type: "text", placeholder:"검색어를 입력해주세요."}
)`
  color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.bgColor};
  border: 3px solid ${(props) => props.theme.textColor};
  margin: 0 5px;
`;

const SearchBtn = styled.button`
  border: 3px solid black;
`;

function App() {
  return (
    <Container>
      <h4>검색어를 입력해주세요. 👇</h4>
      <SearchBar />
      <SearchBtn>검색</SearchBtn>
    </Container>
  );
}

export default App;