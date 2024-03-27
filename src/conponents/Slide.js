import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Wrap = styled.div``;


const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;



const Logo = styled.div`

p {font-weight:bold; font-size:30px; margin:20px 20px;}

@media screen and (max-width:450px) {
font-size : 15px
}
`;


const Menu = styled.div``;


const slideInMenu = keyframes`
from {
transform:translateX(-100%);
}

to {
transform: translateX(0%);
}
`;

const slideOutMenu = keyframes`
from {
transform: translateX(0%);
}

to {
transform:translateX(-100%);
}
`;


const Box = styled.div`
width: 300px;
background-color: aquamarine;
position: fixed;
top: 100px;
left: 0px;
bottom: 0px;

animation-duration: 0.3s;
animation-timing-function: ease;
animation-fill-mode: forwards;

${({isOpen}) => 
isOpen? css`animation-name: ${slideInMenu};`
: css`animation-name:${slideOutMenu};`
}
`;

export const Slide = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <Wrap>
      <Container>
        <Menu>
          <FontAwesomeIcon icon={faBars} style={{fontSize:"60px", margin:"20px 20px"}} onClick={toggleMenu}/>
        </Menu>
        <Logo>
          <p>JSM STUDIO</p>
        </Logo>
      </Container>
      <Box isOpen = {showMenu}>
        Menu
      </Box>
    </Wrap>
  );
};