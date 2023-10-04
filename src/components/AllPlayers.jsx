import { useState, useEffect } from "react";
import { FetchAllPlayers } from "../API/FetchAllPlayers";
import PlayerListName from "./PlayerListName";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  console.log(searchParams);

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

  console.log(displayedPlayers);
  console.log(players);

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