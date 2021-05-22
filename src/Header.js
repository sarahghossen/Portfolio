import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useMediaQuery } from "./useMediaQuery";
import { slide as Menu } from "react-burger-menu";

const Header = () => {
  const [burger, setBurger] = useState(false);
  let isPageWide = useMediaQuery("(min-width: 900px)");

  return isPageWide ? (
    <Container>
      <StyledLink to="home" spy={true} smooth={true}>
        <Img src="/images/myLogo.png" alt="Icon" />
      </StyledLink>
      <LinkDiv>
        <StyledLink LinkactiveClass="active" to="home" spy={true} smooth={true}>
          Home
        </StyledLink>
        <StyledLink to="about" spy={true} smooth={true}>
          About
        </StyledLink>
        <StyledLink to="projects" spy={true} smooth={true}>
          Projects
        </StyledLink>
        <StyledLink to="contact" spy={true} smooth={true}>
          Contact
        </StyledLink>
        <IconDiv href="https://github.com/sarahghossen">
          <AiFillGithub />
        </IconDiv>
        <IconDiv href="https://www.linkedin.com/in/sarahghossen/">
          <AiOutlineLinkedin />
        </IconDiv>
        <IconDiv href="mailto:ghossensarah@gmail.com">
          <HiOutlineMail />
        </IconDiv>
      </LinkDiv>
    </Container>
  ) : (
    // Mobile
    <ContainerMobile>
      <StyledLinkMobile to="home" spy={true} smooth={true}>
        <Img src="/images/myLogo.png" alt="Icon" />
      </StyledLinkMobile>
      <ButtonDiv>
        <Burger
          onClick={() => {
            setBurger(!burger);
          }}
        ></Burger>
      </ButtonDiv>
      <Menu styles>
        <LinkDivMobile burger={burger}>
          <UL>
            <LI>
              <StyledLinkMobile
                onClick={() => setBurger(!burger)}
                LinkactiveClass="active"
                to="home"
                spy={true}
                smooth={true}
              >
                Home
              </StyledLinkMobile>
            </LI>
            <LI>
              <StyledLinkMobile
                onClick={() => setBurger(!burger)}
                to="about"
                spy={true}
                smooth={true}
              >
                About
              </StyledLinkMobile>
            </LI>
            <LI>
              <StyledLinkMobile
                onClick={() => setBurger(!burger)}
                to="projects"
                spy={true}
                smooth={true}
              >
                Projects
              </StyledLinkMobile>
            </LI>
            <LI>
              <StyledLinkMobile
                onClick={() => setBurger(!burger)}
                to="contact"
                spy={true}
                smooth={true}
              >
                Contact
              </StyledLinkMobile>
            </LI>
          </UL>
        </LinkDivMobile>
      </Menu>
    </ContainerMobile>
  );
};

const ContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: #f2efe9;
`;

const StyledLinkMobile = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: #474747;
  cursor: pointer;
  font-size: 20px;
  /* &:hover {
    color: #6da06e;
  }
  &:focus {
    color: #6da06e;
  } */
`;

const LinkDivMobile = styled.nav`
  width: ${(props) => (props.burger ? "0%" : "100%")};
  transition: 0.5s;
  position: absolute;
  overflow-x: hidden;
  display: flex;
  right: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6da06e;
`;

const ButtonDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
`;

const Burger = styled.button`
  background-image: url("/images/burger.png");
  text-decoration: none;
  background-size: 50px;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  border: none;
  z-index: 10000;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease;
  &:focus {
    background-color: #6da06e;
  }
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
`;

const LI = styled.li`
  transition: all 0.2s ease;
  padding: 5px;
  text-align: center;
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f2efe9;
  border-bottom: 2px solid #6da06e;
  z-index: 10;
`;

const StyledLink = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  font-weight: bold;
  color: #474747;
  -webkit-transition: ease-out 0.3s;
  -moz-transition: ease-out 0.3s;
  transition: ease-out 0.3s;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: #6da06e;
  }
`;

const LinkDiv = styled.div``;

const Img = styled.img`
  width: 50px;
`;

const IconDiv = styled.a`
  margin-right: 20px;
  text-decoration: none;
  font-weight: bold;
  color: #474747;
  -webkit-transition: ease-out 0.3s;
  -moz-transition: ease-out 0.3s;
  transition: ease-out 0.3s;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: #6da06e;
  }
`;

export default Header;
