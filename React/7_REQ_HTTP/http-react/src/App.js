
import './App.css';

import {useState} from "react"

// 4 - custom hook 
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/productos"

function App() {
  const [products, setProducts] = useState([])

    //4 custom hook 
    const { data: items, httpConfig, loading, error } = useFetch(url)


    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
  // 1- resgatando dados

  // useEffect(() =>{
  //   async function fetchData(){
  //     const res = await fetch(url)

  //     const data = await res.json()
  
  //     setProducts(data)
  //   }
  //   fetchData()
  // },[])

    // 2 - adição produtos 
    const handleSubmit = async (e) => {
      e.preventDefault()

      const product = {
        name,
        price,
      };

    //   const res = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-type" : "application/json"
    //     },
    //     body : JSON.stringify(product)
    //   })
    //   // 3 carregamento dinamico
    //   const addedProduct = await res.json()

    //   setProducts((prevProducts) => [...prevProducts, addedProduct])


    // 5 refatorando post
      httpConfig(product, "POST")
      setName("")
      setPrice("")
    } 

    // desafio 6
    const handleRemove = (id) => {
      httpConfig(id, "DELETE")
    }
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 Loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
          <ul>
            {items && items.map((products) => (
              <li key={products.id}>{products.name} - R${products.price} <button onClick={() => handleRemove(products.id)} value={products.id}>Delete</button></li>
            ))}
          </ul>
      )}
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
            {/* 7 - sate de loading no post */}
            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}
          </form>
      </div>
    </div>
  );
}

export default App;
