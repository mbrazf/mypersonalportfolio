// Aqui o importa para poder utilizar os styled-components
import styled from 'styled-components'
//Importamos o component Burger
import Burger from './Burger';

// Aqui os estilos da nav
const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    background-color: #001233;

    .nav-branding {
        font-size: 2rem;
        padding: 15px 0;
    }
`;

// Aqui criamos nosso Navbar component que recebe o component Nav acima com seus estilos
const Navbar = () => {
    return(
        <Nav>
            <div className="logo">
            <a href="#" class="nav-branding">Mbrazf</a>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar;