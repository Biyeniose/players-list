//import React from 'react';
import Home from "./components/Home";
import MyNav from "./components/MyNav";
import Team from "./components/Team";
import SignUp from "./components/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import About from './components/About';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
