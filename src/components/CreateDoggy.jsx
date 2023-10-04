
const API = "https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-AM";

export async function CreateDoggy(name, breed, imageURL )  {
  try {
    const response = await fetch(`${API}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, breed, imageURL
      })
    } );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error();
  }
}
