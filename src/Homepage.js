import React from "react";
import styled from "styled-components";

const Homepage = () => {
  return (
    <Container>
      <WelcomeDiv>
        <H1>Hi! I'm Sarah</H1>
        <P>
          I'm an ambitious full-stack developer and graphic designer from
          Montreal who's enthusiastic about making sure creative visions come to
          life.
        </P>
      </WelcomeDiv>
    </Container>
  );
};

const Container = styled.div``;

const WelcomeDiv = styled.div``;

const H1 = styled.h1``;

const P = styled.p``;

export default Homepage;
