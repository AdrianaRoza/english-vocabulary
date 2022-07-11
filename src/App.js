import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/Home";
import WordBase from "./components/WordBase";
import User from "./components/User";
import MemoryGame from "./memory-game/MemoryGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="sobre" element={<WordBase />}/>
        <Route  path="user" element={<User />}/>
        <Route  path="memory-game" element={<MemoryGame />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
