import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <img src="/images/myLogo.png" alt="Icon" />
      <StyledLink to="/">Home</StyledLink>
      <StyledLink></StyledLink>
    </Container>
  );
};

const Container = styled.div``;
const StyledLink = styled(Link)``;

export default Header;
