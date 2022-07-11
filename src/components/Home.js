import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/usuario">Usuario</Link>
          </li>
          <li>
            <Link to="/memory-game">Jogo da Memória</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;