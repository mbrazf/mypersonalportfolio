import styled from 'styled-components'

import Title from '../layout/Title';
import Card from '../../components/Card'



const ProjectsSection = styled.section`
width: 100%;
  height: 100%;
  background-color: #279af1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const Container = styled.div`
margin: auto;
max-width: 90%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
gap: 20px;
justify-content: center;
padding: 40px;
`


function Project( text ){
  return (
    <div>
      <ProjectsSection>
          <Title text="Projetos"/>
          <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Container>

      </ProjectsSection>
      
    </div>
  )
}

export default Project;