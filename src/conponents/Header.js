import styled from "styled-components"

const Wrap = styled.div`
width: 100%;
height: 300px;
background-color: aliceblue;
display: flex;
justify-content: space-between;

`;
const Box1 = styled.div`
width: 300px;
height: 300px;
background-color: blue;


`;
const Box2 = styled.div`
width: 300px;
height: 300px;
background-color: red;


`;
const Box3 = styled.div`
width: 300px;
height: 300px;
background-color: green;


`;

export const Header = () => {
    return <Wrap>
        <Box1 />
        <Box2 />
        <Box3 />
    </Wrap>
}