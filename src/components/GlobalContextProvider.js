"use client"
import { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext(null);

const GlobalContextProvider = (props) => {
    const [data, setData] = useState({});
    return (
        <GlobalContext.Provider value={{data, setData}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;