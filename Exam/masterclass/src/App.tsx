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

interface Dummyprops {
  text: string,
  otherThing?: boolean //option 속성
};

function Dummy({text, otherThing=false}: Dummyprops){
  //props 만들 때 임의의 값을 전달하면
  //전달한 값이 해당 prop의 기본 값으로 초기화된다.
  return <h4>text에 전달된 값: {text}</h4>
}

function App() {
  return (
    <Container>
      <h4>검색어를 입력해주세요. 👇</h4>
      <SearchBar />
      <SearchBtn>검색</SearchBtn>
      <Dummy text="더미 컴포넌트"/>
    </Container>
  );
}

export default App;