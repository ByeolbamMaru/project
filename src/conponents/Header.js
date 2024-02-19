import styled from "styled-components"

const Wrap = styled.div`
line-height: 300px;
text-align: center;
display:flex;
justify-content: space-between;
`

const Box1 = styled.div`
background-color: blue;
width: 300px;
height: 300px;
`;

const Box2 = styled.div`
background-color: red;
width: 300px;
height: 300px;
`;

const Box3 = styled.div`
background-color: green;
width: 300px;
height: 300px;
`;


export const Header = () => {
    return <Wrap>
        <Box1>1</Box1>
        <Box2>2</Box2>
        <Box3>3</Box3>
    </Wrap>
}

