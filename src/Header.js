import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <img src="/images/myLogo.png" alt="Icon" />
      <StyledLink>Home</StyledLink>
      <StyledLink></StyledLink>
    </Container>
  );
};

const Container = styled.div``;
const styledLink = styled(Link)``;

export default Header;
