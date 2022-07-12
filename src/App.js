import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/Home";
import WordBase from "./components/WordBase";
import Noun from "./components/Noun";
import MemoryGame from "./memory-game/MemoryGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="word-base" element={<WordBase />}/>
        <Route  path="noun" element={<Noun />}/>
        <Route  path="memory-game" element={<MemoryGame />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
