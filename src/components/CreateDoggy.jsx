
const API = "https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-AM";

export async function CreateDoggy()  {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

   try {
      const result = await createDoggy(name, breed, image);
    } catch (error) {
      console.log(error);
    }
  };

  async function createDoggy(name, breed, image) {
    try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-AM/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                breed: breed,
                image: image,
            })
        });
        
        if (response.status === 200) {
            // The POST request was successful (status code 200 Created)
            const result = await response.json();
            return result;
        } else {
            // Handle errors or other status codes here
            throw new Error("Failed to create a post");
        }
    } catch (error) {
        console.error("Error creating a post:", error);
        throw error;
    }
}

const handleNameChange = (e) => {
  setName(e.target.value);
};

const handleBreedChange = (e) => {
  setBreed(e.target.value);
};

const handleImageChange = (e) => {
  setImage(e.target.value);
};
  }

