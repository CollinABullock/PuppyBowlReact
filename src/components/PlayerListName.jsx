import { useNavigate } from "react-router-dom";
// import { deletePost } from "../../../../Block30/StrangersThings/src/components/FetchAllPosts";

async function handleDelete() {
  try {
      const result = await deletePost(post._id);
      console.log(result);
      navigate("/");
  } catch(error){
      console.log(error);
  }
}

export default function PlayerListName({player}) {
  const navigate = useNavigate();
  console.log(player.id);
  return (
    <>
    <h3>{player.name}</h3>
    <button className="more details" onClick={() => navigate(`/${player.id}`)}>Click for more details!</button>
    </>
  )
}