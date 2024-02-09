import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useTranslation } from 'react-i18next';
import appReducer from './AppReducer';

const AppContext = createContext();

const initialState = {
    language: localStorage.getItem("language") || "fa"
}

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initialState)
    const { i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(state.language)
        localStorage.setItem('language', state.language)
        document.body.dataset.direction = state.language === "fa" ? "rtl" : "ltr"
    }, [state.language])

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