import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers'
import { Routes, Route, Link, useNavigate } from "react-router-dom"; 
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayer';

function App() {

  return (
    <>
      
      <div className='newPlayerForm'>
        <NewPlayerForm />
      </div>
      
      <h1>Puppy Bowl</h1>

    <Routes>
      <Route path="/" element={<AllPlayers />} />
      <Route path="/:id" element={<SinglePlayer />} />
    </Routes>
    </>
  )
}

export default App
