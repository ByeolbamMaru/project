import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components"

const Wrap = styled.div``;

const Box = styled.div`
width: 300px;
height:300px;
background: ${props => props.$bgcolor};
`;

export const Event = () => {
    const [bgcolor, setBgcolor] = useState("blue");
    const [num, setNum] = useState(0);

    const Counter = () => {
        if (num === 0)
        {setBgcolor("blue");
        setNum(num +1);
        }else if (num === 1)
        {setBgcolor("green");
        setNum(num -1);
        }
    }


    return <Wrap>
        <Box $bgcolor={bgcolor} onClick={Counter}/>
    </Wrap>
}