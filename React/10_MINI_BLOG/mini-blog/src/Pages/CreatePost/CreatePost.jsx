import styles from "./CreatePost.module.css";

import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../Context/AuthContext";
import { useState } from "react";
import { useInsertDocument } from "../../Hooks/useInsertDocument";

const CreatePost = () => {
  const { user } = useAuthValue();

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")  

  const { insertDocument, response } = useInsertDocument("posts")

  const handleSubmit = async(e) =>{
    e.preventDefault()
    setFormError("")

    //validar url da imagem
    try{
      new URL(image)
    }catch(error){
      setFormError("A imagem precisa ser uma URL.")
    }
    //criar array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    //checar todos os valores
    if(!title || !image || !tags || !body){
      setFormError("Preencha todas as informações.")
    }

    if(formError){
      return;
    }

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    // redirect homepage
    navigate("/")
  }

  return (
    <div className={styles.create_post}>
      {!user && navigate("/")}
        <h1>Criar Posts</h1>
        <p>Escreva sobre o que quiser e compartilhe conhecimento</p>
        <form onSubmit={handleSubmit}>
            <label>
              <span>Titulo:</span>
              <input type="text" required placeholder="Pense num bom titulo :)" name="title" value={title}
              onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label>
              <span>URL da Imagem:</span>
              <input type="text" required placeholder="Escolha uma imagem que descreva seu post" name="image"
              value={image} onChange={(e) => setImage(e.target.value)}/>
            </label>
            <label>
              <span>Conteudo: </span>
              <textarea name="body" required placeholder="insira o conteudo do seu post" value={body}
              onChange={(e)=> setBody(e.target.value)}></textarea>
            </label>
            <label>
              <span>Tags: </span>
              <input type="text" required placeholder="Insira as tags separadas por virgula" name="tags"
              value={tags} onChange={(e) => setTags(e.target.value)}/>
            </label>
            {!response.loading && <button className="btn">Postar</button>}
            {response.loading && <button className="btn" disabled>Aguarde...</button>}
            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
        </form>
    </div>
  )
}

export default CreatePost