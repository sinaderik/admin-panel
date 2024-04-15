import { set } from "lodash";
import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState()
    const [serchedItems, setSearchedItems] = useState()

    return (
        <CategoryContext.Provider value={{ category, setCategory, serchedItems, setSearchedItems}}>
            {children}
        </CategoryContext.Provider >
    )
}

const useCategoryContext = () => {
    return useContext(CategoryContext)
}

export { CategoryProvider, useCategoryContext }