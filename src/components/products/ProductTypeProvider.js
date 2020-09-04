import React, {useState} from "react"

export const TypeContext = React.createContext()

export const TypeProvider = (props) => {
    const [types, setTypes] = useState([])

    const getTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(setTypes)
    }

    return (
        <TypeContext.Provider value={{
            types, getTypes
        }}>
            {props.children}
        </TypeContext.Provider>
    )
}