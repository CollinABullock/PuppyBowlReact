import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchSinglePlayer from "../API/FetchSinglePlayer";
import AllPlayers from "./AllPlayers";

const API = "https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-AM/players";

export default function SinglePlayer() {
  const [player, setPlayer] = useState(null)
  
  const {id} = useParams();
  console.log(id);

 useEffect(() => {
  async function getSinglePlayer() {
    const APIresponse = await fetchSinglePlayer(id);
    if (APIresponse.success) {
      setPlayer(APIresponse.data.player)
    } else { 
      setError(APIresponse.error.message)
    }
  }
  getSinglePlayer()
 }, [])

  return (
    <>
    <h1>{player && player.name}</h1>
    <button onClick>Go Back!</button>
    </>
  )
}