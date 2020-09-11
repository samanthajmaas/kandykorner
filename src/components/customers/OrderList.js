import React, {useContext, useEffect} from "react"
import {ProductContext} from "../products/ProductProvider"
import {PurchaseContext} from "./CustomerCandyProvider"
import {Order} from "./Order"
import "./Orders.css"

export const OrderList = () => {
    const {products, getProducts} =useContext(ProductContext)
    const {purchases, getPurchases} = useContext(PurchaseContext)

    useEffect(()=> {
        getProducts()
        getPurchases()
    }, [])

    return (
        <>
        <h1> My Orders </h1>
        <div className="orders">
            {
                purchases.map(purchase => {
                    const product = products.find(product => product.id === purchase.candyId) ||{}
                    return <Order key={purchase.id} product={product} purchase={purchase} />
                })
            }
        </div>
        </>
    )
}