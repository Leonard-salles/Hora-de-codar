import { Navigate } from "react-router-dom";
import styles from "./CreatePost.module.css";
import { useAuthValue } from "../../Context/AuthContext";

const CreatePost = () => {
  const { user } = useAuthValue();

  if(!user){
    return <Navigate to="/" />
  }
  return (
    <div>
        <h1>Create Post</h1>
    </div>
  )
}

export default CreatePost