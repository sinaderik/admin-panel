import React, { createContext, useContext, useReducer } from 'react'
import appReducer from './AppReducer';

const AppContext = createContext();

const initialState = {
    language: localStorage.getItem("language") || "fa"
}

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initialState)

    function changeLanguage(language) {
        dispatch({ type: "CHANGE_LANGUAGE", payload: language })
    }

    return (
        <AppContext.Provider value={{ ...state, changeLanguage }}>
            {children}
        </AppContext.Provider>
    )
}


const useAppContext = () => {
    return useContext(AppContext)
}

export { useAppContext, AppProvider }