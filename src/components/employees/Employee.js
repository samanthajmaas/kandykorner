import React, { useContext } from "react"
import {EmployeeContext} from "./EmployeeProvider"
import "./Employees.css"

export const Employee = (props) => {
    const {fireEmployee} = useContext(EmployeeContext)

    return (
    <section className="employee">
            <h3 className="employee__name">{props.employee.name}</h3>
            <div className="employee__location">Location: {props.location.name}</div>
            <div className="manager">Manger: {props.employee.manager.toString()}</div>
            <div className="fullTimer">Type: {props.employee.fullTime.toString()}</div>
            <div className="hourlyRate">PayRate: {props.employee.hourlyRate}</div>

            <button onClick={
                () => {
                    fireEmployee(props.employee.id)
                        .then(() => {
                            props.history.push("/employees")
                        })
                }
            }>
                Fire Employee
            </button>
    </section>

    )
}