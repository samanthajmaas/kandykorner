import React, {useContext, useEffect} from "react"
import {ProductContext} from "./ProductProvider"
import {Product} from "./Product"
import {TypeContext} from "./ProductTypeProvider"

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)
    const {types, getTypes} = useContext(TypeContext)

    useEffect(()=> {
        getProducts()
        getTypes()
    }, [])

    return (
        <div className="products">
            {
                products.map(product => {
                    const productType = types.find(type => type.id === product.productTypeId) || {}
                    return <Product key={product.id} product={product} productType={productType} />
                })
            }
        </div>
    )
}