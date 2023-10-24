import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../Context/AuthContext";
import styles from "./Login.module.css"

import { useState, useEffect } from "react";

import { useAutentication } from "../../Hooks/useAutentication";

const Login = () => {
  const { user } = useAuthValue();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAutentication();

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();

    setError("")
    const user ={
      email,
      password
    }
    console.log(user)
    const res = await login(user);

    console.log(res)
    // navigate("/")
  };

  useEffect (() =>{
    if(authError){
      setError(authError)
    }
  }, [authError])

  return (
    <div className={styles.login}>
      {user && navigate("/")}
      <h1 >Entrar</h1>
        <p>Fça login para poder utilizar o sistema.</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>E-mail: </span>
            <input type="email" name="email" required placeholder="E-mail do usuário" onChange={(e) =>{setEmail(e.target.value)}}/>
          </label>
          <label>
            <span>Senha: </span>
            <input type="password" name="password" required placeholder="Insira sua senha" onChange={(e) =>{setPassword(e.target.value)}}/>
          </label>
          {!loading && <button className="btn">Entrar</button>}
          {loading && <button className="btn" disabled>Aguarde...</button>}
          {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Login