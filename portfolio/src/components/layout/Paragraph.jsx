import styled from 'styled-components'

// Estilos do component Paragraph
const Content = styled.p`
font-size: 1rem;
font-weight: 500;
color: #FFF
`

// Component Paragraph
function Paragraph( {content} ){
    return (
        <Content>{content}</Content>
        
    )
  }
  
  export default Paragraph;