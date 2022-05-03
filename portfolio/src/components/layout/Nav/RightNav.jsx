import styled from "styled-components";

import { Link } from 'react-router-dom'

// Aqui criamos o componet Ul ja com seus estilos
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  li {
    padding: 18px 10px;
  }

  a {
    color: white;
    text-decoration: none;
    font-family: "Roboto";
    padding: 14px;
    
}

a:hover {
    color: #279AF1;
    font-style: italic;
}


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #001233;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateY(-100%)")};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    text-align: center;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

// Aqui o component que será exibido ao clicar no menu Burger, recebe oepn como prop
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
      <Link to="/projetos">Projetos</Link>
      </li>
      <li>
      <Link to="/skills">Skills</Link>
      </li>
      <li >
      <Link to="/contato">Contato</Link>
      </li>
    </Ul>
  );
};

export default RightNav;
