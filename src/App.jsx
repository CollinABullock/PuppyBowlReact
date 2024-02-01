import './App.css'
import AllPlayers from './components/AllPlayers2';
import { Routes, Route, } from "react-router-dom"; 
// import SinglePlayer from './components/SinglePlayer';
import CreateDoggy from './components/newPlayerForm2';
import SinglePlayer from './components/SinglePlayer2';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <NavBar />

<div className='routes'>

    <Routes>
      <Route path="/" element={<AllPlayers />} />
      <Route path="/:id" element={<SinglePlayer />} />
      <Route path="/newPlayerForm" element={<CreateDoggy />} />
      

    </Routes>
    </div>
<Footer />
    </>
  )
}

export default App
