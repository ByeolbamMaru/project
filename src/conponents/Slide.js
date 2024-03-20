import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { ScrollLink } from "react-scroll";
import styled, { keyframes } from "styled-components";

const Wrap = styled.div``;

const Container = styled.div`
display: flex;
justify-content: space-between;
`;

const Logo = styled.div`
  h1 {font-size: 50px;}
  margin: 0px 25px;
`;

const Menu = styled.div`
cursor: pointer;
`;


const Slidedown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;


const Slidemenu = styled.div`
  width: 100%;
  background-color: brown;
  display: ${(props) => (props.menuopen ? "block" : "none")};
  animation: ${Slidedown} 0.5s ease-in-out;
  position: absolute;
  top: 120px;
`;



export const Slide = () => {
  const [menuopen, setMenuopen] = useState(false);
  const menuRef = useRef();

  const Open = () => {
    setMenuopen(!menuopen);
  };

  const Closemenu = () => {
    setMenuopen(false);
  };

  useEffect(() => {
    const handleoutsideclick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        Closemenu();
      }
    };

    document.addEventListener("mousedown", handleoutsideclick);
    return () => {
      document.removeEventListener("mousedown", handleoutsideclick);
    };
  }, []);

  return (
    <Wrap>
      <Container>
        <Logo>
          <h1>JSM SLIDE</h1>
        </Logo>
        <Menu onClick={Open}>
            <FontAwesomeIcon icon={faBars} style={{fontSize:"60px", margin:"40px 40px"}} />
        </Menu>
        <Slidemenu menuopen={Open} ref={menuRef}>
            <ScrollLink onclick={Open} spy={true} smooth={true} duration={500}>123</ScrollLink>
            <ScrollLink>456</ScrollLink>
            <ScrollLink>789</ScrollLink>
            <ScrollLink>000</ScrollLink>
        </Slidemenu>
      </Container>
    </Wrap>
  );
};