import { createContext, useReducer } from "react";
import reducer from "./reducer";
import data from "./data";

export const Context = createContext()


export const ThemeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, data)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}