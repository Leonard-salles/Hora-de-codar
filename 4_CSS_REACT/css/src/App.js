
import './App.css';
import MyComponents from './components/MyComponents';
import {useState} from "react"
import Title from './components/Title';

function App() {
  const n = 15
  const [name] = useState("leo")
  const redTitle = false
  return (
    <div className="App">
      <h1>React com css</h1>
      <p>este paragrafo é do app.js</p>
      <MyComponents />
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>este elemento foi estilizado em inline</p>
      {/* css inline dinamico */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>CSS dinamico</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>CSS dinamico</h2>
      <h2 style={name === "Leonardo" ? {color: "green", backgroundColor: "#000"} : null}>Teste nome</h2>
      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>
      {/* css module */}
      <Title />
      <h2 className="my_title">Testando</h2>

    </div>
  );
}

export default App;
