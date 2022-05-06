import styled from "styled-components";
import Paragraph from "../layout/Paragraph";

import Title from "../layout/Title";

const AboutSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #279af1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  height: 400px;
  background: #001233;
  border-radius: 10px;
  box-shadow: 0 0 1em #001233;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;
`;

const Wrapper = styled.div`
    width: 50%;
`

const ProfileImage = styled.div`
background-image: url(https://thispersondoesnotexist.com/image);
background-position: center;
background-size: cover;
width: 200px;
height: 200px;
border-radius: 50%;
border: 5px solid black;
`

function About() {
  return (
    <div>
      <AboutSection>
          <Title text="Sobre"/>
          <AboutContent>
                <ProfileImage />
            <Wrapper>
                <Paragraph content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolorum hic eum. Harum quod explicabo quibusdam ab a earum nulla sed vel corporis, doloribus ullam voluptate modi necessitatibus eum assumenda."/>
                <Paragraph content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolorum hic eum. Harum quod explicabo quibusdam ab a earum nulla sed vel corporis, doloribus ullam voluptate modi necessitatibus eum assumenda."/>
                </Wrapper>
          </AboutContent>
      </AboutSection>
    </div>
  );
}

export default About;
