import MyComponents from "./MyComponentes";


const FirstComponent = () =>{

    //essa função faz isso

    return(
        <div>
            <h1>My First Component</h1>
            {/* <p className="teste">test</p> */}
            <MyComponents />
        </div>
    );
}

export default FirstComponent