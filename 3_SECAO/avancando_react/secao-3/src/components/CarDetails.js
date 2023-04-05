

const CarDetails = ({marca, km, cor, newCar}) => {
  return (
    <div>
        <h1>Detalhes do carro</h1>
        <ul>
            <li>Marca : {marca}</li>
            <li>KM : {km}</li>
            <li>Cor : {cor}</li>
        </ul>
        {newCar && <p>Este carro é novo !!!</p>}
    </div>
  )
}

export default CarDetails