import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Img src="/images/myLogo.png" alt="Icon" />
      <LinkDiv>
        <StyledLink>Home</StyledLink>
        <StyledLink>about</StyledLink>
        <StyledLink>Projects</StyledLink>
        <StyledLink>Contact</StyledLink>
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
  &:hover {
    color: #6da06e;
  }
`;
const LinkDiv = styled.div``;
const Img = styled.img`
  width: 50px;
`;

export default Header;
