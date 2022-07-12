import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="/word-base">Base de Palavras</Link>
          </li>
          <li>
            <Link to="/noun">Substantivos</Link>
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