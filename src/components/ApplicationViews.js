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

export const ApplicationViews = (props) => {
    return (
        <>

            <LocationsProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationsProvider>

            <ProductProvider>
                <TypeProvider>
                    <Route exact path="/Products">
                        <ProductList />
                    </Route>
                </TypeProvider>
            </ProductProvider>

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