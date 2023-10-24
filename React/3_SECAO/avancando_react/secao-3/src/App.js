import { useState } from 'react';
import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import Executing from './components/Executing';
import Message from './components/Message';
import ChageMessageState from './components/ChageMessageState';
import UserDetails from './components/UserDetails';


function App() {

  const [username] = useState("Evy")
  const cars = [
    {id: 1, marca: "Lamborginni", km:0, cor: "Amarela", newCar: true },
    {id: 2, marca: "Camaro", km:5554, cor: "Preto", newCar: false },
    {id: 3, marca: "Fiat", km:4823, cor: "Branco", newCar: false }
  ]

  const Pessoas = [
    {id: 1, nome: "Kaua", trabalho:"Estudante", idade: 15 },
    {id: 2, nome: "Leonardo", trabalho:"Desenvolvedor", idade: 22},
    {id: 3, nome: "Evelyn", trabalho: "Medica", idade: 18 }
  ]

  function showMessage(){
    console.log("Este é um evento do elemento pai")
  }

  const [message, setMessage] =  useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando em react</h1>
      <ConditionalRender />
      {/* Props */}
      <ShowUsername name={username} />
      {/* destructuring */}
      <CarDetails marca="Ferrari" km={300} cor="Vermelha" newCar={false}/>
      {/* Reaproveitamento */}
      <CarDetails marca="BMW" km={0} cor="Branco" newCar={true}/>
      <CarDetails marca="Fiat" km={4000} cor="Azul" newCar={false}/>
      {/* componente loop */}
      {cars.map((car) =>(
        <CarDetails key={car.id} marca={car.marca} km={car.km}  cor={car.cor} newCar={car.newCar}/>
      ))}
      {/* Fragments */}
      <Fragments />
        {/* Childrens */}
        <Container myValue="teste">
          <p>este é o conteudo children</p>
        </Container>
        <Container myValue="teste 2">
          <h4>Teste h4</h4>
        </Container>
        {/* funçao pelo componente filho  */}
        <Executing myFunction={showMessage} />
        {/* State lift */}

        <Message msg={message}/>
        <ChageMessageState handleMessage={handleMessage} />
        {/* atividade */}

        {Pessoas.map((pessoa) => (
          <UserDetails key={pessoa.id} nome={pessoa.nome} profissao={pessoa.trabalho} idade={pessoa.idade}/>
        ))}

    </div>
  );
}

export default App;
