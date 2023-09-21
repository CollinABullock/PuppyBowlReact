import { useState, useEffect } from "react";
import { FetchAllPlayers } from "../API/FetchAllPlayers";
import SinglePlayer from "./SinglePlayer";
import { useNavigate } from "react-router-dom";
import PlayerListName from "./PlayerListName";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [Error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  console.log(searchParams);

  const navigate = useNavigate();
  useEffect (() => {
    async function getAllPlayers() {
      const response = await FetchAllPlayers();
      if (response.success) {
        setPlayers(response.data.players);
      } else {
        setError(response.error.message);
      }
    }
    getAllPlayers();
  }, []);

  const displayedPlayers = searchParams ? players.filter((player) =>
    player.name.toLowerCase().includes(searchParams)
  ) : players;

  return (
    <>
    <div>
      <label>
        Search{" "}
        <input type="text"
        placeholder="search"
        onChange={(e) => setSearchParams (e.target.value.toLowerCase())}
        />
      </label>
    </div>

    {displayedPlayers.map((player) => {
      return (
        <>
      <PlayerListName player={player} key={player.id} />
      </>
      )
    })}
    </>
  );
}