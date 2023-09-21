import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchSinglePlayer from "../API/FetchSinglePlayer";

const API = "https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-AM/players";

export default function SinglePlayer() {
  const [player, setPlayer] = useState(null);

  const {id} = useParams();
  console.log(id);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

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
    <h1>{player && player.breed}</h1>
    <img src="{player && player.imageurl}" alt="Doggo Pic" />
    <button onClick={goBack}>Go Back!</button>
    </>
  )
}