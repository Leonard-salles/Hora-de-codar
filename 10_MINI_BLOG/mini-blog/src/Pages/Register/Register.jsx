import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

  };

  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input type="text" name="displayName" required placeholder="Nome do usuário" onChange={(e) =>{setUsername(e.target.value)}}/>
          </label>
          <label>
            <span>E-mail: </span>
            <input type="email" name="email" required placeholder="E-mail do usuário" onChange={(e) =>{setEmail(e.target.value)}}/>
          </label>
          <label>
            <span>Senha: </span>
            <input type="password" name="password" required placeholder="Insira sua senha" onChange={(e) =>{setPassword(e.target.value)}}/>
          </label>
          <label>
            <span>Confirmação de senha: </span>
            <input type="password" name="confirmPassword" required placeholder="Confirme sua senha" onChange={(e) =>{setConfirmPassword(e.target.value)}}/>
          </label>
          <button className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register