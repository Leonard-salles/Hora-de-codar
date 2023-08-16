import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import styles from "./css/home.module.css"

const Search = () => {

    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?"+ searchParams

    const { data: items, loading, error } = useFetch(url)

  return (
    <div>
        <h1>Resultados disponiveis</h1>
        <ul className={styles.products}>
          {items && items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Search