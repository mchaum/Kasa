import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Erreur from './pages/Erreur404';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    {/* Chemin vers les pages créées : */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/error" element={<Erreur />} />
      {/* Redirection vers une page erreur 404 si l'url ne correspond à rien de connu : */}
      <Route path="*" element={<Erreur />} />
    </Routes>
  </BrowserRouter>
)
};

export default App;