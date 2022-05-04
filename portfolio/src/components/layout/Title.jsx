import styled from 'styled-components'

//  Estilos do component title
const Text = styled.h1`
    font-weight: 500;
    font-size: 2.5rem;
    color: #279AF1; 
`

// Component title
function Title( {text} ){
    return (
        <Text>{text}</Text>
        
    )
  }
  
  export default Title;