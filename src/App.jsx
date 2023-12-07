import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers'
import { Routes, Route, Link, useNavigate } from "react-router-dom"; 
import SinglePlayer from './components/SinglePlayer';
import { CreateDoggy } from './components/CreateDoggy';

function App() {

  return (
    <>
      
      <h1>Puppy Bowl</h1>

<div className='routes'>
    <Routes>
      <Route path="/" element={<AllPlayers />} />
      <Route path="/:id" element={<SinglePlayer />} />
    </Routes>
    </div>

    <h1>Enter Your Own Doggy!</h1>
    <CreateDoggy />

    </>
  )
}

export default App
