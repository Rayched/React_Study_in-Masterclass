import styled from "styled-components";
import RouterExam from "./exams/RouterExam/RouterExam";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function App(){
    return (
        <Wrapper>
            <RouterExam />
        </Wrapper>
    );
};