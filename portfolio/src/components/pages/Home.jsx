import styled from 'styled-components'
import Paragraph from '../layout/Paragraph'


// Aqui os estilos do styled component
const MainContent = styled.main`
width: 100%;
height: 100vh;
background-color: #279AF1;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const MainContainer = styled.div`
height: 300px;
background-color: #001233;
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: flex-start;
padding: 30px;
border-radius: 10px;
box-shadow: 0 0 1em #001233;
`

const HomeTitle = styled.h1`
  color:  #279AF1;
  font-weight: 500;
    font-size: 2.5rem;
`

// Aqui criamos a página inicial / home
function Home(){
  return (
    <div>
      <MainContent>
        <MainContainer>
          <HomeTitle>Olá, eu sou o Marcelo Braz &#128075;</HomeTitle>
          <Paragraph content="Desenvolvedor Front End Iniciante | Júnior"/>
        </MainContainer>
      </MainContent>
    </div>
  )
}

export default Home;