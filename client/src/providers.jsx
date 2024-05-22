import { createContext, useContext, useState } from 'react'

export const Context = createContext(null)

export const useData = () => useContext(Context)

export const DataProvider = ({ children }) => {
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    })

    const setProvider = (input) => {
        setState({
            ...state,
            provider: input,
        })
    }
    return (
        <Context.Provider value={{ state, setProvider }}>
            {children}
        </Context.Provider>
    )
}
