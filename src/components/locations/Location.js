import React from "react"
import "./Locations.css"

export const Location = ({location}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <div className="location__squareFootage">{location.squareFootage}</div>
        <dic className="location__handicapAccessible">{location.handicapAccessible}</dic>
    </section>
)