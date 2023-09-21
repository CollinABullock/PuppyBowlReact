const API = "https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-AM";

export default async function fetchSinglePlayer(id) {
  try {
    const response = await fetch(`${API}/players/${id}`);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}