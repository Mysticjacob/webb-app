import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './HomeContent';
import Html from './htmlContent'; 
import Css from './CSSContent'; 
import Cpp from './cpp'; 
import Python from './python'; 
import Form from './form'; 
import Signout from './signout';
import display from './display';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes> {}
        <Route path="/" element={<Home />} /> {}
        <Route path="/home" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/cpp" element={<Cpp />} />
        <Route path="/python" element={<Python />} />
        <Route path="/form" element={<Form />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/display" element={< display />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
