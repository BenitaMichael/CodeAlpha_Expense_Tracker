import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


//Initial State

const InitialState = {
    transactions:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

//Create context
export const GlobalContext = createContext(InitialState)


//Provider component
export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer (AppReducer, InitialState);

    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}