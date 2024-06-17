import styled from "styled-components";

interface CircleProps {
    bgColor: string;
}

const Container = styled.div<CircleProps>`
    //'styled.div'<interface> or <type>'
    //=> styled Component에 type 지정하기
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50px;
`;

function Circle({bgColor} : CircleProps){
    return (
        <Container bgColor={bgColor}/>
    );
}

export default Circle;