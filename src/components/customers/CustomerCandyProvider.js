import React, {useState} from "react"

export const PurchaseContext = React.createContext()

export const PurchaseProvider = (props) => {
    const [purchases, setPurchases] = useState([])

    const getPurchases = () => {
        return fetch("http://localhost:8088/customersCandies")
            .then(res => res.json())
            .then(setPurchases)
    }

    const addPurchase = (purchase) => {
        return fetch("http://localhost:8088/customersCandies" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purchase)
        })
        .then(getPurchases)
    }

    return (
        <PurchaseContext.Provider value ={{
            purchases, getPurchases, addPurchase
        }}>
            {props.children}
        </PurchaseContext.Provider>
    )
}