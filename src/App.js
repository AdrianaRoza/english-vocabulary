import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/Home";
import WordBase from "./components/WordBase";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="sobre" element={<WordBase />}/>
        <Route  path="user" element={<User />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
