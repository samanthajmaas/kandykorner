import React from "react"
import "./Orders.css"

export const Order = ({purchase, product}) => {
    return (
        <section className="order">
            <h3 className="order__name">{product.name}</h3>
            <div className="order__price">${product.price}</div>
        </section>
    )
}
