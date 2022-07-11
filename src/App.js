import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Usuario from "./components/Usuario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="sobre" element={<Sobre />}/>
        <Route  path="usuario" element={<Usuario />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
