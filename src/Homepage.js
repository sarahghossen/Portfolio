import react from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { ScrollRotate } from "react-scroll-rotate";
import ReactPlayer from "react-player";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const Homepage = () => {
  return (
    <Container>
      <WelcomeDiv id="home">
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
      <AboutMeDiv id="about">
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
      <ProjectDiv id="projects">
        <H2>Projects</H2>
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
              Find out more about them{" "}
              <a
                href="http://en.naturepet.com/"
                style={{ textDecoration: "none", color: "#6da06e" }}
              >
                here
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
        <Projects style={{ marginTop: "150px" }}>
          <Video controls>
            <source
              src="https://res.cloudinary.com/sourcedev-hajar/video/upload/v1620165275/Cyborg%20Store%20Demo.mp4"
              type="video/mp4"
            />
          </Video>
          <Div3>
            <P style={{ fontWeight: "bold" }}>Cyborg Social Club</P>
            <PSmall>
              Cyborg Social Club is a fictional store where we sell futuristic
              tech. The goal of this project is to build from scratch a fully
              functional e-commerce store, working with both the front and
              back-end. The focus was good teamwork, strong communication and a
              good workflow.
            </PSmall>
            <PSmall>
              Tools used include: React.js, Redux, Node.js and MongoDB.
            </PSmall>
            <PSmall>For more information on the project:</PSmall>
            <a
              style={{ color: "#6da06e", fontSize: "30px" }}
              href="https://github.com/sarahghossen/Cyborg-Social-Club"
            >
              <AiFillGithub />
            </a>
          </Div3>
        </Projects>
      </ProjectDiv>
      <ContactDiv id="contact">
        <H2>Contact</H2>
        <Div4>
          <FormDiv>
            <P>See anything you like? Don't hesitate to contact me!</P>
          </FormDiv>
          <IconDiv2>
            <IconDiv>
              <a
                style={{ color: "#6da06e", fontSize: "40px" }}
                href="https://github.com/sarahghossen"
              >
                <AiFillGithub />
              </a>
            </IconDiv>
            <IconDiv>
              <a
                style={{ color: "#6da06e", fontSize: "40px" }}
                href="https://www.linkedin.com/in/sarahghossen/"
              >
                <AiOutlineLinkedin />
              </a>
            </IconDiv>
            <IconDiv>
              <a
                style={{ color: "#6da06e", fontSize: "40px" }}
                href="mailto:ghossensarah@gmail.com"
              >
                <HiOutlineMail />
              </a>
            </IconDiv>
          </IconDiv2>
        </Div4>
      </ContactDiv>
    </Container>
  );
};

const Video = styled.video`
  width: 630px;
  @media (max-width: 900px) {
    width: 90vw;
  }
`;
const Container = styled.div`
  background-color: #f2efe9;
  /* height: 100vh; */
  width: 100vw;
  overflow-x: hidden;
`;

const WelcomeDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Div1 = styled.div`
  width: 50vw;
  @media (max-width: 900px) {
    width: 95vw;
  }
`;

const Img = styled.img`
  width: 10vw;
  @media (max-width: 900px) {
    width: 30vw;
  }
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
  @media (max-width: 900px) {
    font-size: 4.5em;
  }
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
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const H2 = styled.div`
  font-size: 3em;
  font-weight: bold;
  color: #595959;
  margin-bottom: 30px;
`;

const Div2 = styled.div`
  margin-left: 50px;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 20px;
    margin-left: 0px;
    text-align: center;
  }
`;

const ImgMe = styled.img`
  width: 40vw;
  @media (max-width: 900px) {
    width: 70vw;
  }
`;

const ProjectDiv = styled.div`
  background-color: #f2efe9;
  padding: 170px;
  @media (max-width: 900px) {
    padding: 20px;
    text-align: center;
  }
`;

const Projects = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #6da06e;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
`;

const Div3 = styled.div`
  width: 30vw;
  margin-left: 30px;
  margin-right: 30px;
  @media (max-width: 900px) {
    width: 80vw;
  }
`;

const PSmall = styled.p`
  font-size: 15px;
  margin-bottom: 13px;
  margin-top: 13px;
  @media (max-width: 900px) {
    width: 80vw;
  }
`;

const ContactDiv = styled.div`
  background-color: #f2efe9;
  padding: 170px;
  @media (max-width: 900px) {
    padding: 20px;
    text-align: center;
  }
`;

const FormDiv = styled.div``;

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconDiv = styled.div`
  margin-right: 20px;
  margin-top: 20px;
`;

const IconDiv2 = styled.div`
  display: flex;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export default Homepage;
