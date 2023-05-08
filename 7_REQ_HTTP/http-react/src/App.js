
import './App.css';

import {useState, useEffect} from "react"

// custo hook 
import {useFetch} from "./hooks/useFetch"

const url = "http://localhost:3000/productos/"

function App() {

  const [products, setProducts] = useState([]);

  // custom 
  const {data: items, httpConfig } = useFetch(url)


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    const product = {
      name,
      price,
    };
    console.log(product)

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product)
    // });

    
    // 3 carregamento dinamico 
    // const addedProduct = await res.json()
    // setProducts((prevProducts) => [...prevProducts, addedProduct]) 

    setName("")
    setPrice("")

    // 5 refatorando hook
    httpConfig(product, "POST")

  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {items && items.map((products) => (
          <li key={products.id}>{products.name} - R${products.price} </li>
        ))}
      </ul>
      <div className='add-product'>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome:</span>
              <input type="text" value={name} name='name' onChange={(e) => {setName(e.target.value)}} />
            </label>
            <label>
              <span>Preço:</span>
              <input type="number" value={price} name='price' onChange={(e) => {setPrice(e.target.value)}} />
            </label>
            <input type="submit" value="Criar" />
          </form>
      </div>
    </div>
  );
}

export default App;
