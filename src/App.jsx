import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers2';
import { Routes, Route, Link, useNavigate, BrowserRouter } from "react-router-dom"; 
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';

function App() {

  return (
    <>
      
    

<div className='routes'>

    <Routes>
      <Route path="/" element={<AllPlayers />} />
      <Route path="/:id" element={<SinglePlayer />} />
      <Route path="/newPlayerForm" element={<NewPlayerForm />} />
      

    </Routes>
   
    </div>

    </>
  )
}

export default App
