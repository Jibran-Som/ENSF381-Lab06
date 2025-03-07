import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import EngineeringTopics from './EngineeringTopics.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const list = [
  {
  title: "Home",
  desc:"Welcome to our website."
} ,
{
  title: "About Us",
  desc:"We are passionate about delivering quality experiences"
},
{
  title: "Contact Us",
  desc:"Feel free to reach out to us via email or phone."
}

]



function App() {
  
  let currentYear = new Date().getUTCFullYear();
  let isLoggedIn = false;
  const messageToPassAbout = "About Us";
  const messageToPassContact = "Contact Us"
  
  return(
  <div>
    <h1>ENSF-381: Full Stack Web Development</h1>
    <p>React Components</p>
    <p>{currentYear}</p>
    {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    <Home message={list[0]}/>
    <About message={list[1]}/>
    <Contact message={list[2]}/>
    <EngineeringTopics/>
</div>

  )
}



export default App;

/*    <h1><About message={messageToPassAbout}/> </h1> 
    <h1><Contact message={messageToPassContact}/> </h1> 
    
    <About message={list}/>
    <Contact message={list}/>*/