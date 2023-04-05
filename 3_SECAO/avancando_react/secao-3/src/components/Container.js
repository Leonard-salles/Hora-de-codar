
const Container = ({children, myValue}) => {
  return (
    <div>
        <h1>Conteudo</h1>
        {children}
        <p>este é o valor : {myValue}</p>
    </div>
  )
}

export default Container