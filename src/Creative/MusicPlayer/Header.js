import { faBars, faFileExport, faSliders, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components"

const Wrap = styled.div``;

const Name = styled.div`
display: flex;
h1 {color:white}
align-items: center;
margin-left: 30px;
margin-right: 30px;
`;

const Space = styled.div`
display: flex;
margin-left: 1080px;
`;

const Line = styled.div`
border: 1px solid gray;
margin-top: 0px;
`;

const Line2 = styled.div`
border: 1px solid gray;
margin-top: 1px;
`;


export const Header = () => {
    return <Wrap>
        <Name>
            <h1><FontAwesomeIcon icon={faStar} color="aliceblue" fontSize={30} /> SeiYa Player</h1>
            <Space>
                <h1>ㅣ<FontAwesomeIcon icon={faFileExport} color="white" fontSize={30} /></h1>
            </Space>
            <h1>ㅣ<FontAwesomeIcon icon={faSliders} color="white" fontSize={30} /></h1>
            <h1>ㅣ<FontAwesomeIcon icon={faBars} color="white" fontSize={30} /></h1>
        </Name>
        <Line></Line>
        <Line2></Line2>
    </Wrap>
}