import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) =>{
    // switch
    switch(action.type){
        case "RED":
            return {...state, color:"red"}

        case "BLUE":
            return {...state, color:"blue"}

        case "GREEN":
            return {...state, color:"green"}

        case "BLACK":
            return {...state, color:"black"}

        default:
            return state
    }
}

export const TitleColorContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(titleColorReducer, { color: "purple"});

    console.log("Title color Context: ", state)

    return(
        <TitleColorContext.Provider value={{...state, dispatch}}> 
            {children}
        </TitleColorContext.Provider>
    )
}


