
const TemplateExpression = () => {
    const name = "Leo"
    const data = {
        age: 31,
        job : "Programmer"
    }

    return(
        <div>
            <h2>Olá {name} tudo bem ?</h2>
            <h3>Você atua como {data.job}</h3>
            <p>{4*4}</p>
            <p>{console.log('hyyyy')}</p>
        </div>
    )
}

export default TemplateExpression
