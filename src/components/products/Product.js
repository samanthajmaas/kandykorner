import React from "react"

export const Product = ({product, productType}) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__productType">Type: {productType.type}</div>
        <dic className="product__price">Price: ${product.price}</dic>
    </section>
)