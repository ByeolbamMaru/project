import styled from "styled-components";

export const Wrap = styled.div``;

export const Container = styled.div``;

export const Headers = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 5%;
`;

export const Cover = styled.div`
text-align: center;
h2 {margin-top: 10px; font-size: 15px;}
`;

export const Box = styled.div`
width: 300px;
height: 300px;
border: 1px solid black;
margin: 0px auto;
background: url(${props => props.$bgimage}) no-repeat center /Cover;
`;

export const Bars = styled.div`
width: 100%;
max-width: 80%;
border: 1px solid black;
border-radius: 10px;
margin: 0px auto;
`;

export const Timeraps = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 10%;
`;

export const Option = styled.div`
display: flex;
justify-content: space-between;
padding: 0px 10%;
`;

export const Slide = styled.div`
width: 100%;
max-width: 80%;
height: 50px;
border: 2px solid black;
border-radius: 30px;
margin: 0px auto;
display: flex;
justify-content: space-between;
p {font-size: 25px; margin-right: 250px;}
line-height: 0px;
margin-top: 50px;
`;

export const Circle = styled.div`
width: 40px;
height: 40px;
border: 1px solid black;
border-radius: 50%;
background-color: black;
margin-top: 5px;
`;