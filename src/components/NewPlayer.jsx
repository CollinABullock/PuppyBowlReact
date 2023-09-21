import { useState } from "react";
import { FetchAllPlayers } from "../API/FetchAllPlayers";

const API = "https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-AM";

export default function NewPlayerForm() {
const [newForm, setNewForm] = useState("")

const createPlayer = (event) => {
  setNewForm(event.target.value);
};

return (
  <>
  <h3>Add your doggy!</h3>
 <form>
  <label for="name">Name</label><br />
  <input type="text" id="name" name="name" placeholder="Doggy Name" /><br /><br />
  <label for="name">Breed</label><br />
  <input type="text" id="breed" name="breed" placeholder="Doggy Breed" /><br /><br />
  <button type="submit">Add your dog!</button>
  </form>
  </>
)
}