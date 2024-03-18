import styled from "styled-components"

const Wrap = styled.div`
border: 2px solid black;
border-radius: 15px 0 15px 0;
padding: 15px 5%;


`;
const Container = styled.div`
display: flex;
justify-content: space-between;

`;
const Logo = styled.div`
font-size: 50px;
color: skyblue;

`;
const Button = styled.button`
font-size: 50px;

`;

export const Header = () => {
    return <Wrap>
        <Container>
            <Logo>LOGO</Logo>
            <Button>Click</Button>
        </Container>
    </Wrap>
}