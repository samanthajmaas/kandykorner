import React, {useState, useContext, useEffect} from "react"
import {ProductContext} from "./ProductProvider"
import {Product} from "./Product"
import {TypeContext} from "./ProductTypeProvider"
import "./Products.css"

export const ProductList = (props) => {
    const {products, getProducts, searchTerms} = useContext(ProductContext)
    const {types, getTypes} = useContext(TypeContext)

    const [filteredProducts, setFiltered] = useState([])

    useEffect(()=> {
        getProducts()
        getTypes()
    }, [])

    useEffect (() => {
        if(searchTerms !== ""){
            const subset = products.filter(product => product.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered(products)
        }
    }, [searchTerms, products])

    return ( 
        <>
        <h1>Products</h1>
        <div className="products">
            {
                filteredProducts.map(product => {
                    const productType = types.find(type => type.id === product.productTypeId) || {}
                    return <Product key={product.id} product={product} productType={productType} {...props}/>
                })
            }
        </div>
        </>
    )
}