const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>Detalhes do usuario</h2>
        <ul>
            <li>Nome : {nome}</li>
            <li>idade : {idade}</li>
            <li>profissao : {profissao}</li>
        </ul>
        {idade >= 18 ? (
            <p>Parabens você pode tirar sua habilitação</p>
        ) : (
            <p>Você ainda não pode tirar sua carteira de habilitação</p>
        )}
    </div>
  )
}

export default UserDetails