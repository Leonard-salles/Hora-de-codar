import {useState} from 'react'

const ManageData = () => {
    let someData = 10;
    console.log(someData)

    const [number, SetNumber] = useState(20)

  return (
    <div>
        <div>
        <p> o valor {someData}</p>
        <button onClick={() => (someData = 15)}>mudar valor</button>
        </div>
        <div>
            <p>valor state {number}</p>
            <button onClick={() => SetNumber(30)}>Mudar State</button>
        </div>
    </div>
  )
}

export default ManageData