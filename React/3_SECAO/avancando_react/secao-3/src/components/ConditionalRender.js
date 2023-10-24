import {useState} from 'react'

const ConditionalRender = () => {
    const [x] = useState(false)
    const [name, setName] = useState("Thiago")

  return (
    <div>
        <h1>Isoo sera exibido ?</h1>
        {x && <p>Se x for verdadeiro sim</p>}
        {!x && <p>Agora x é falso</p>}
        <h1>If ternario</h1>
        {name === "Joao" ? (
            <div>
                <p>O nome é {name}</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        ) }
        <button onClick={() => setName("Joao")}>Click Aqui</button>
    </div>
  )
}

export default ConditionalRender