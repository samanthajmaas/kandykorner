import React, { useContext} from "react"
import {PurchaseContext} from "../customers/CustomerCandyProvider"
import "./Products.css"

export const Product = (props) => {
    const {addPurchase} = useContext(PurchaseContext)
    
    return (
    <>
    <section className="product">
        <h3 className="product__name">{props.product.name}</h3>
        <div className="product__productType">Type: {props.productType.type}</div>
        <div className="product__price">Price: ${props.product.price}</div>
        <button onClick={() =>{
            addPurchase({
                candyId: props.product.id,
                customerId: parseInt(localStorage.getItem(("kandyCustomer")))
            })
                .then(() => {
                    props.history.push("/myOrder")
                })
        }}>
            Purchase Candy
        </button>
    </section>
    </>
    
)}