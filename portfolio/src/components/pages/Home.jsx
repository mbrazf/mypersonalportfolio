import styled from 'styled-components'



const Title = styled.h1`
  color:red;
  font-size: 40px;
`


function Home(){
  return (
    <div>
      <Title/>
      <p>CONTEUDO DA HOME</p>
    </div>
  )
}

export default Home;