import {useState} from 'react'

const Lista = () => {
    const [list] = useState(["Leo", 'Pedro', "Eduardo", 'Thiago', "Junior"]);
    const [users, setUser] = useState([
        {id: 1, name : "Pedro", age: 20},
        {id: 2, name : "gustavo", age: 10},
        {id: 3, name : "Leo", age: 21}
    ])
    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);

        setUser((prevUser) => {
           return prevUser.filter((user) => randomNumber !== user.id) 
        })
    }

  return (
    <div>
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                    ))}
            </ul>
        </div>
        <div>
            <ul>
                {users.map((user) =>(
                    <li key={user.id}> {user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>

    </div>
  )
}

export default Lista