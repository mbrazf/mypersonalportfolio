import styled from 'styled-components'

// Estilos do component Paragraph
const Content = styled.p`
font-size: 1.5rem;
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