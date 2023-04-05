
const Events = () => {

    const handleMyEvent = (e) =>{
        console.log(e)
        console.log("Ativou evento")
    }

    const handleSomething = (x) =>{
        if (x){
           return <h1>Posso renderizar isso</h1>
        }
        else{
           return <h1>Também posso renderizar isso </h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Click here</button>
            </div>
            <div>
                <button onClick={() =>{ console.log("click")}}>Click here too</button>
            </div>
            {handleSomething(true)}
            {handleSomething(false)}
        </div>
    )

}

export default Events

