import React, {useContext} from "react"
import {ProductContext} from "./ProductProvider"

export const ProductSearch = (props) => {
    const {setTerms} = useContext(ProductContext)

    return (
        <>
        Product Search: 
        <br></br>
        <input type ="text"
            className="input--wide"
            onKeyUp={
                (keyEvent) => setTerms(keyEvent.target.value)
            }
            placeholder="Search for a product..." />
        </>
    )
}