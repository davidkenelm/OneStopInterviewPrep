import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages";
import Applications from './pages/applications';
import Network from './pages/network';
import InterviewPrep from './pages/interviewPrep';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/applications" element = {<Applications/>}/>
        <Route path="/interviewPrep" element = {<InterviewPrep/>}/>
        <Route path="/network" element = {<Network/>}/>

       
      </Routes>
    </Router>
  );
}

export default App;
