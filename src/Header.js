import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const Header = () => {
  return (
    <Container>
      <StyledLink to="home" spy={true} smooth={true}>
        <Img src="/images/myLogo.png" alt="Icon" />
      </StyledLink>
      <LinkDiv>
        <StyledLink LinkactiveClass="active" to="home" spy={true} smooth={true}>
          Home
        </StyledLink>
        <StyledLink to="about" spy={true} smooth={true}>
          about
        </StyledLink>
        <StyledLink to="projects" spy={true} smooth={true}>
          Projects
        </StyledLink>
        <StyledLink to="contact" spy={true} smooth={true}>
          Contact
        </StyledLink>
        <StyledLink href="https://github.com/sarahghossen">
          <AiFillGithub />
        </StyledLink>
        <StyledLink>
          <AiOutlineLinkedin />
        </StyledLink>
        <StyledLink>
          <HiOutlineMail />
        </StyledLink>
      </LinkDiv>
    </Container>
  );
};

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

export default Header;
