import { useState } from "react";


export default function NewPlayerForm( {players, setPlayers}) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createPost(name, breed, image);
      // navigate('/products');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input 
      type="text"
      name="name" 
      placeholder="What is the doggo's name?"
      onChange={(e) => setName(e.target.value)}
      /><br/>
      <input 
      type="text"
      name="breed" 
      placeholder="What is the doggo's breed"
      onChange={(e) => setBreed(e.target.value)}
      /><br />
      <input 
      type="text"
      name="image-link" 
      placeholder="Paste a URL of your dog's picture"
      onChange={(e) => setImage(e.target.value)}
      /><br />
      <button>Submit</button>
    </form>
  );
}