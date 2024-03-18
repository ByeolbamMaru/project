import styled from "styled-components"

const Wrap = styled.div`
display: flex;
justify-content: space-between;

`;
const Box = styled.div`
width: 300px;
height: 300px;
background-color: ${props => props.$bgColor};

`;

export const Color = () => {
    return <Wrap>
        <Box $bgColor = "blue"/>
        <Box $bgColor = "red"/>
        <Box $bgColor = "green"/>
    </Wrap>
}