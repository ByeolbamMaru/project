import styled from "styled-components"
import { Setting } from "./Setting";

const Wrap = styled.div`
width: 500px;
height: 750px;
background-color: #eee;
border: 2px solid black;
position: absolute;
top: 10%;
left: 50%;
transform: translate(-50% );
`;

export const MusicApp = () => {
    return <Wrap>
        <Setting />
    </Wrap>
}