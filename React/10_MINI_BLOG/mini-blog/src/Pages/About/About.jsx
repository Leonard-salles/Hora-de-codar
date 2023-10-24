import { Link } from "react-router-dom"

//CSS
import styles from "./About.module.css"
import { useAuthValue } from "../../Context/AuthContext";

const About = () => {
  const { user } = useAuthValue();

  return (
    <div className={styles.about}>
        <h2>Sobre o Mini <span>Blog</span></h2>
        <p>Este projeto consiste em React no front-end e Firebase no Back-end</p>
        {!user && <Link className="btn" to="/login">Criar Post</Link>}
        {user && <Link className="btn" to="/posts/create">Criar Post</Link>}
        
    </div>
  )
}

export default About