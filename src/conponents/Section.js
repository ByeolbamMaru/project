import styled from "styled-components"

const Wrap = styled.div `
width: 100%;
height: 500px;
background-color: gray;
display: flex;
justify-content: center;
line-height: 500px;
h1 {font-size: 100px;}
`;


export const Section = () => {
    return <Wrap>
        <h1>첫번째 섹션
            
        </h1>
    </Wrap>
}