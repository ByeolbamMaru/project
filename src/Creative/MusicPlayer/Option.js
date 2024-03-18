import { faArrowsRotate, faBackwardStep, faForwardStep, faPlay, faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components"

const Wrap = styled.div``;

const Line = styled.div`
border: 1px solid gray;
margin-top: 1px;
`;

const Line2 = styled.div`
border: 1px solid gray;
margin-top: 1px;
`;

const Button = styled.div`
width: 70%;
max-width: 80%;
display: flex;
justify-content: space-between;
margin-left: 240px;
margin-top: 50px;
`;

const Bars = styled.div`
width: 100%;
max-width: 80%;
border: 5px solid white;
border-radius: 10px;
margin-left: 150px;
margin-top: 30px;
`;

const ColorBars = styled.div`
width: 55%;
max-width: 80%;
border: 5px solid orange;
border-radius: 10px;
`;

const Timeraps = styled.div`
display: flex;
justify-content: space-between;
padding: 0px 10%;
p {margin-top: 0px}
p {font-size: 20px}
p {color: white}
`;

export const Option = () => {
    return <Wrap>
        <Line></Line>
        <Line2></Line2>
        <Button>
            <FontAwesomeIcon icon={faShuffle} color="white" fontSize={40} />
            <FontAwesomeIcon icon={faBackwardStep} color="white" fontSize={40} />
            <FontAwesomeIcon icon={faPlay} color="white" fontSize={40} />
            <FontAwesomeIcon icon={faForwardStep} color="white" fontSize={40} />
            <FontAwesomeIcon icon={faArrowsRotate} color="white" fontSize={40} />
        </Button>
        <Bars>
            <ColorBars></ColorBars>
        </Bars>
        <Timeraps>
            <p> 00:00 </p>
            <p> 02:49 </p>
        </Timeraps>
    </Wrap>
}