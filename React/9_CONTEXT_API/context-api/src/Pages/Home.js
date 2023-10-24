
// import { useContext } from 'react'

// import {CounterContext} from '../Context/CounterContext'
import { useCounterContext } from '../hooks/useCounterContext'
import ChangeCounter from './ChangeCounter'
//4 - refatorando o hook counter context


//5 - context complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  //5- contexto mais complexo
  const { color, dispatch } = useTitleColorContext()

  // 6 - alterando state complexo

  const setTitleColor = (color) =>{
    dispatch({type: color})
  }


  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador {counter}</p>
      <ChangeCounter />
      <div>
        {/* 6 alterando state complexo */}
        <button onClick={()=>{setTitleColor("RED")}}>Vermelho</button>
        <button onClick={()=>{setTitleColor("GREEN")}}>Verde</button>
        <button onClick={()=>{setTitleColor("BLUE")}}>Azul</button>
        <button onClick={()=>{setTitleColor("BLACK")}}>Preto</button>
      </div>
    </div>
  )
}

export default Home