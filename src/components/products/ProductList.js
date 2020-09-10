import React, {useContext, useEffect} from "react"
import {ProductContext} from "./ProductProvider"
import {Product} from "./Product"
import {TypeContext} from "./ProductTypeProvider"
import "./Products.css"

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)
    const {types, getTypes} = useContext(TypeContext)

    useEffect(()=> {
        getProducts()
        getTypes()
    }, [])

    return (
        <>
        <h1>Products</h1>
        <div className="products">
            {
                products.map(product => {
                    const productType = types.find(type => type.id === product.productTypeId) || {}
                    return <Product key={product.id} product={product} productType={productType} />
                })
            }
        </div>
        </>
    )
}