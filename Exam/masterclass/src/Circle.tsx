import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    //borderColor: string | undefined;
    //이게 된다고????
    //지금 당장 시험해보고 싶긴 한디...
    //시간이 많이 늦었다. (00:42 기준)
    //이 부분에 대해서는 화요일 퇴근 후에
    //시험을 해보도록 하자.

    text? : string;
}

const Container = styled.div<CircleProps>`
    //'styled.div'<interface> or <type>'
    //=> styled Component에 type 지정하기
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50px;

    /* 기존 방식 (내가 알아낸 거)
    border: ${(props) => {
        if(!props.borderColor){
            return "none";
        } else {
            return `3px solid ${props.borderColor}`
        }
    }};*/
    /*강의에서 제시된 다른 방식*/
    border: 3px solid ${(props) => props.borderColor};

    font-weight: bold;
    display: flex;
    justify-content: center;
`;

function Circle({bgColor, borderColor, text="기본값"} : CircleProps){
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    );
}

export default Circle;