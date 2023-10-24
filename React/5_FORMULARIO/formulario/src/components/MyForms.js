import "./MyForms.css"

import {useState} from "react"

function MyForms({user}) {
    // 6 Controlled inputs

    // 3 gerenciamento de dados
    const[name, setName] = useState(user ? user.name : "")
    const[email, setEmail] = useState(user ? user.email : "")

    const[bio, setBio] = useState(user ? user.bio : "");

    const [role, setRole] = useState(user ? user.role : "");    

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("enviando formulario")
        console.log(name)
        console.log(email)
        console.log(bio)
        console.log(role)

        // validação

        //envio

        // 7 limpar formulario
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

    return (
    <div>
        {/*  5-envio de form */}
        {/* 1 Ceiação de formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" value={name} placeholder="Digite seu nome" onChange={handleName} />
            </div>
            {/* 2 Label envolvendo input */}
            <label>
                {/* 4- simplificado */}
                <span>E-mail: </span>
                <input type="text" value={email} placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
            </label>
            {/* 8 - textarea */}
            <label>
                <span>Bio: </span>
            <textarea name="bio" placeholder="Descrição do usuario"
                value={bio}
                onChange={(e) => setBio(e.target.value)}>
            
            </textarea>
            </label>

            {/* 9 select */}

            <label>
                <span>Função no sistema</span>
                <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin" >Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForms