import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WordBase = () => {
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);

  const addWord = (event) => {
    event.preventDefault();
    setWords((previous) => [...previous, word]);
    setWord("");
  }

  const newWord = words.map((w) => <div>{w}</div>);

  return (
    <>
      <form>
        <label>Enter your name:
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button onClick={addWord}>Add</button>
        </label>
      </form>
      <div>
        { newWord }
      </div>
      <Link to="/">retornar a página inicial</Link>
    </>
  );
}

export default WordBase;