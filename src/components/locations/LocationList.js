import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider"
import { Location } from "./Location"
import "./Locations.css"

export const LocationList = () => {
    
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        console.log("LocationList: Initial render before data")
        getLocations()
    }, [])

    useEffect(() => {
        console.log("LocationList: Location state changed")
        console.log(locations)
    }, [locations])

    return (
        <>
        <h1>Locations</h1>
        <div className="locations">
        {
            locations.map(location => <Location key={location.id} location={location} />)
        }
        </div>
        </>
    )
}