import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Properties from "./components/properties/Properties";
import Contact from "./components/contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
