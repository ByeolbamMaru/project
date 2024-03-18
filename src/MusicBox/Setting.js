import { faAngleLeft, faAngleRight, faArrowsRotate, faBars, faCaretDown, faCirclePlay, faShuffle, faSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrap, Container, Headers, Cover ,Box ,Bars ,Timeraps ,Option ,Slide ,Circle } from "../style/css"

export const Setting = () => {
    return <Wrap>
        <Container>
            <Headers>
                <FontAwesomeIcon icon={faCaretDown} style={{fontSize:"30px"}}/>
                <FontAwesomeIcon icon={faBars} style={{fontSize:"25px"}}/>
            </Headers>
            <Cover>
                <Box $bgimage ="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdnimg.melon.co.kr%2Fsvc%2Fuser_images%2Fplylst%2F2023%2F06%2F34%2F77%2F526333109_org.jpg%3Ftm%3D20231018085138%2Fmelon%2Fresize%2F500%2Fquality%2F80%2Foptimize&type=a340" />
                <h1>제목</h1>
                <h2>소제목</h2>
            </Cover>
            <Bars></Bars>
            <Timeraps>
                <p>00 : 00</p>
                <p>03 : 14</p>
            </Timeraps>
            <Option>
            <FontAwesomeIcon icon={faShuffle } style={{fontSize:"25px"}}/>
            <FontAwesomeIcon icon={faAngleLeft} style={{fontSize:"25px"}}/>
            <FontAwesomeIcon icon={faSquare} style={{fontSize:"25px"}}/>
            <FontAwesomeIcon icon={faAngleRight} style={{fontSize:"25px"}}/>
            <FontAwesomeIcon icon={faArrowsRotate} style={{fontSize:"25px"}}/>
            </Option>
            <Slide>
                <Circle />
                <p>제목</p>
                <FontAwesomeIcon icon={faCirclePlay} style={{fontSize:"40px", marginTop:"5px"}}/>
            </Slide>
        </Container>
    </Wrap>
}