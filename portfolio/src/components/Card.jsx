import styled from "styled-components";


const Polaroid = styled.div`
background: #001233;
padding: 15px 15px 20px;
box-shadow: 0 0 1em #001233;
border-radius: 10px;

.caption {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
}

.photo {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border: 2px solid white;
}

.tecnology {
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
}

.tecnology span {
    padding: 5px;
    border: 1px solid white;
    font-size: 0.9rem;
    margin: 0 5px;
    border-radius: 5px;
    font-family: "Roboto";
}

.project-icons {
    text-align: right;
    
}

.year {
color: #279AF1;
}
`

function Card() {
  return (
    <Polaroid>
      <img src="" alt="" className="photo" />
      <div className="caption">
        <h2>Jogo da Velha </h2>
        <p>
          Jogo da Velha, clique no tabuleiro e comece a jogar, no fim da rodada
          exibe quem ganhou ou se foi empate
        </p>
        <p>2022</p>
        <div class="tecnology">
          <span>HTML</span>
          <span>CSS</span>
          <span>JS</span>
        </div>
        <div class="project-icons">
          <a
            href="https://github.com/mbrazf/TicTacToe-JogoDaVelha"
            target="blank"
            class="fa fa-github icons"
          ></a>
          <a
            href="https://mbrazf-tictactoe.netlify.app/"
            target="blank"
            class="fa fa-link icons"
          ></a>
        </div>
      </div>
    </Polaroid>
  );
}

export default Card;
