// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchSinglePlayer } from "../API/FetchSinglePlayer";


// export default function SinglePlayer() {
//   const [player, setPlayer] = useState(null);

//   const {id} = useParams();
//   console.log(id);

//   const navigate = useNavigate();

//   const goBack = () => {
//     navigate(-1);
//   }

//  useEffect(() => {
//   async function getSinglePlayer() {
//     const response = await fetchSinglePlayer(id);
//     if (response.success) {
//       setPlayer(response.data.player)
//     } else { 
//       setError(response.error.message)
//     }
//   }
//   getSinglePlayer()
//  }, [])

//   return (
//     <>
//     <img src="{player && player.imageurl}" alt="Doggo Pic" /><br />
//     <h1>{player && player.name} is a {player && player.breed} and is a very good boy!</h1><br />
//     <button onClick={goBack}>Go Back!</button>
//     </>
//   )
// }