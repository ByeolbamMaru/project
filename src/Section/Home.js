import styled from "styled-components"
import { Header } from "./Header"
import { Layout } from "./Layout";

const Wrap = styled.div``;

export const Home = () => {
    return <Wrap>
        <Header />
        <Layout />
    </Wrap>
}