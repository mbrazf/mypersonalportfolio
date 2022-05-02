// importamos o useState, os estilos do styled-components e o component que foi utilizado
import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

// Aqui criamos o component do menu hamburger com seus estilos
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;

  ${"Estilos quando a largura da tela for 768px"}

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    ${"Aqui criamos a animção do menu hamburger quando ele estiver ativo"}

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

// Aqui o component Burger
const Burger = () => {
  //Criamos um state responsável para exibir o menu hamburger em telas menores
  const [open, setOpen] = useState(false);

  //No menu Burger passamos open como prop e um evento de clique para alterar o state ao clicar no menu Burger e abaixo se o state open for true será exibido o menu de navegação para dispositivos menores
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
