import styled from "styled-components";

import Title from "../layout/Title";

import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

const SkillsSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #279af1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const SkillsWrapper = styled.div`
  width: 700px;
  height: 300px;
  background-color: #001233;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;
  box-shadow: 0 0 1em #001233;
  flex-wrap: wrap;

  .icon {
    font-size: 50px;
    color: white;
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .skill:hover {
    transition: ease-in-out 0.2s;
    transform: scale(1.2);
  }

  .skill p {
    color: white;
  }
`;

function Skills() {
  return (
    <div>
      <SkillsSection>
        <Title text="Skills" />
        <SkillsWrapper>
          <div className="skill">
            <FaJs className="icon" />
            <p>Javascript</p>
          </div>
          <div className="skill">
            <FaReact className="icon" />
            <p>React</p>
          </div>
          <div className="skill">
            <FaHtml5 className="icon" />
            <p>HTML 5</p>
          </div>
          <div className="skill">
            <FaCss3 className="icon" />
            <p>CSS 3</p>
          </div>
          <div className="skill">
            <FaBootstrap className="icon" />
            <p>Bootstrap</p>
          </div>
          <div className="skill">
            <FaWordpress className="icon" />
            <p>Wordpress</p>
          </div>
          <div className="skill">
            <FaGitAlt className="icon" />
            <p>Git</p>
          </div>
        </SkillsWrapper>
      </SkillsSection>
    </div>
  );
}

export default Skills;
