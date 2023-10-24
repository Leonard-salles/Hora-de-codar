import { Link, useParams } from "react-router-dom" 
import { useFetch } from "../hooks/useFetch"

const Product = () => {

  // 4 rota dinamica
  const { id } = useParams()

  const url = "http://localhost:3000/products/" + id
  //5 carregamento dinamico
  const {data: product, loading, error} = useFetch(url)

  return (
    <div>
      <p>id do produto {id}</p>
      {error && <p>Ocorreu um erro</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
          {/* 6 Nested Router */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </div>
  )
}

export default Product