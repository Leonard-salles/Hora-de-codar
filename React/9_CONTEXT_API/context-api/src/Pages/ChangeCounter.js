// 3- alterando contexto

import { useContext } from 'react'

import {CounterContext} from '../Context/CounterContext'

const ChangeCounter = () => {

    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
        <button onClick={()=>{setCounter(counter + 1)}}>Aumentar contador</button>
        <button onClick={() => {setCounter(counter -1)}}>Diminuir contador</button>
    </div>
  )
}

export default ChangeCounter