import react, { useRef } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { ScrollRotate } from "react-scroll-rotate";
import useScrollSnap from "react-use-scroll-snap";
import ReactPlayer from "react-player";
import { AiFillGithub } from "react-icons/ai";

const Homepage = () => {
  //   const scrollRef = useRef(null);
  //   useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  return (
    <Container>
      {/* ref={scrollRef}> */}
      <WelcomeDiv>
        <Div1>
          <Fade top>
            <H1>Hi! I'm Sarah</H1>
            <P>
              I'm an ambitious full-stack developer and graphic designer from
              Montreal who's enthusiastic about making sure creative visions
              come to life.
            </P>
          </Fade>
        </Div1>
        <ScrollRotate>
          <Img src="/images/avocado.png" alt="avocadoblob" />
        </ScrollRotate>
      </WelcomeDiv>
      <ArrowDiv>
        <ImgArrow src="/images/arrow.png" alt="arrow" />
      </ArrowDiv>
      <AboutMeDiv>
        <ImgMe src="/images/Me.png" alt="picture of me" />
        <Fade top>
          <Div2>
            <H2>About Me</H2>
            <P>
              I am a graphic designer turned full stack developer with a passion
              and enthusiasm for web development. Having both the design
              background and technical training, I am able to interpret and
              transcribe creative visions through a technical view point and
              overcome their challenges.
            </P>
          </Div2>
        </Fade>
      </AboutMeDiv>
      <ProjectDiv>
        <H2>My Projects</H2>
        <Projects>
          <ReactPlayer url="https://youtu.be/t3SIcS5H8iA" />
          <Div3>
            <P style={{ fontWeight: "bold" }}>Pet Centre Nature - Rebrand</P>
            <PSmall>
              I decided to recreate and rebrand Pet Centre Nature's website
              because I felt that there was a lot of missing potential when it
              came to who they are as an organization and how they represented
              it through there website. I wanted to give it more of a modern and
              refreshing feel as well as smoother user experience and clear
              navigation.
            </PSmall>
            <PSmall>
              Tools I used include: React.js, Redux, Node.js and MongoDB.
            </PSmall>
            <PSmall>
              Note: This project is for educational purposes only and Pet Centre
              Nature retains 100% of their intellectual properties and brand.
              Not all information is accurate to Pet Centre Nature. Find out
              more about them here:{" "}
              <a
                href="http://en.naturepet.com/"
                style={{ textDecoration: "none", color: "#6da06e" }}
              >
                http://en.naturepet.com/
              </a>
            </PSmall>
            <PSmall>For more information on the project:</PSmall>
            <a
              style={{ color: "#6da06e", fontSize: "30px" }}
              href="https://github.com/sarahghossen/Pet-Centre-Nature-Rebrand"
            >
              <AiFillGithub />
            </a>
          </Div3>
        </Projects>
      </ProjectDiv>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f2efe9;
  height: 100vh;
  width: 100vw;
`;

const WelcomeDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
  margin-bottom: 30px;
`;

const Div1 = styled.div`
  width: 50vw;
`;

const Img = styled.img`
  width: 10vw;
`;
const ImgArrow = styled.img`
  width: 30px;
`;

const ArrowDiv = styled.div`
  width: 100vw;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 5em;
  color: #595959;
  margin-bottom: 30px;
`;

const P = styled.p`
  font-size: 25px;
  color: #808080;
`;

const AboutMeDiv = styled.div`
  background-color: #f2efe9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px;
  /* padding: 100px; */
  /* height: 60vh; */
`;

const H2 = styled.div`
  font-size: 3em;
  font-weight: bold;
  color: #595959;
  margin-bottom: 30px;
`;

const Div2 = styled.div`
  margin-left: 50px;
`;

const ImgMe = styled.img`
  width: 30vw;
`;

const ProjectDiv = styled.div`
  background-color: #f2efe9;
  padding: 200px;
`;

const Projects = styled.div`
  display: flex;
`;

const Div3 = styled.div`
  width: 50vw;
  margin-left: 30px;
`;

const PSmall = styled.p`
  font-size: 15px;
  margin-bottom: 13px;
  margin-top: 13px;
`;
export default Homepage;
