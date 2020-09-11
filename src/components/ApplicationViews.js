import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationsProvider } from "./locations/LocationsProvider"
import { ProductProvider } from "./products/ProductProvider"
import { TypeProvider } from "./products/ProductTypeProvider"
import { ProductList } from "./products/ProductList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { OrderList } from "./customers/OrderList"
import {PurchaseProvider} from "./customers/CustomerCandyProvider"

export const ApplicationViews = (props) => {
    return (
        <>

            <LocationsProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationsProvider>

            <ProductProvider>
                <PurchaseProvider>
                    <TypeProvider>
                        <Route exact path="/Products" render={
                            props => <ProductList {...props}/>
                        }>
                        </Route>
                    </TypeProvider>
                </PurchaseProvider>
            </ProductProvider>

            <PurchaseProvider>
                <ProductProvider>
                    <Route exact path="/myOrder">
                        <OrderList/>
                    </Route>
                </ProductProvider>
            </PurchaseProvider>

            <EmployeeProvider>
                <LocationsProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />
                    <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                    } />
                </LocationsProvider>
            </EmployeeProvider>

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("kandyCustomer")
                    props.history.push("/login")
                }
            } />
        </>

    )
}