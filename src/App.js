import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/Home";
import WordBase from "./components/WordBase";
import Usuario from "./components/Usuario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="sobre" element={<WordBase />}/>
        <Route  path="usuario" element={<Usuario />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
