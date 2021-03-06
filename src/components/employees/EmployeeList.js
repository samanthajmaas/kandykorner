import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import { LocationContext } from "../locations/LocationsProvider"
import "./Employees.css"

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getEmployees()
        getLocations()
    }, [])

    useEffect(() => {

    }, [employees])

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
        <article className="employeeList">
            {
                employees.map(employee => {
                    const location = locations.find(location => location.id === employee.locationId) || {}

                   return <Employee key={employee.id} employee={employee} location={location} {...props}/>

                })
            }
            </article>
        </div>
    )
}