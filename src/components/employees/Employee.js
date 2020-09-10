import React from "react"
import "./Employees.css"

export const Employee = ({employee, location}) => (
    <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {location.name}</div>
            <div className="manager">Manger: {employee.manager}</div>
            <div className="fullTimer">Type: {employee.fullTime}</div>
            <dic className="hourlyRate">PayRate: {employee.hourlyRate}</dic>
    </section>
)