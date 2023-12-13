import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers2';
import { Routes, Route, Link, useNavigate, BrowserRouter } from "react-router-dom"; 
// import SinglePlayer from './components/SinglePlayer';
import CreateDoggy from './components/newPlayerForm2';
import SinglePlayer from './components/SinglePlayer2';

function App() {

  return (
    <>
      
    

<div className='routes'>

    <Routes>
      <Route path="/" element={<AllPlayers />} />
      <Route path="/:id" element={<SinglePlayer />} />
      <Route path="/newPlayerForm" element={<CreateDoggy />} />
      

    </Routes>
   
    </div>

    </>
  )
}

export default App
