import styled from 'styled-components'

//  Estilos do component title
const Text = styled.h1`
width: 90%;
font-style: normal;
font-weight: 900;
font-size: 4rem;
color: #fff;
text-shadow: 0px 4px 4px #001233;
padding-top: 40px
`

// Component title
function Title( {text} ){
    return (
        <Text>{text}</Text>
        
    )
  }
  
  export default Title;