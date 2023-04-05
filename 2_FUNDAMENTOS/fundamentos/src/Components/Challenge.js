const Challenge = () => {

    const a = 25
    const b = 40

    const handleSoma = () => {
        console.log(`A soma vale : ${25 + 40}`)
    };


    return (
        <div>
            <div>
                <h1> Calculando numeros </h1>
                <p>a = {a}</p>
                <p>b = {b}</p>
            </div>
            <div>
                <button onClick={handleSoma}>Somar</button>
            </div>
        </div>
    )

}

export default Challenge