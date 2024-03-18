import styled from "styled-components"
import { Header } from "./Header";
import { Cover } from "./Cover";
import { Option } from "./Option";
const Wrap = styled.div`width: 100%;
max-width: 90%;
height: 95vh;
border: 6px solid gray;
border-radius: 20px;
background-color: silver;
position: absolute;
left: 100px;`;

const Container = styled.div``;

export const Main = () => {
    return <Wrap>
        <Container>
            <Header />
            <Cover />
            <Option />
        </Container>
    </Wrap>
}