import React from "react"
import {LocationList} from "./locations/LocationList"
import {LocationsProvider} from "./locations/LocationsProvider"

export const KandyKorner = () => (
    <>
     
     <h2>Locations</h2>
     <article>
         <LocationsProvider>
             <LocationList />
         </LocationsProvider>
     </article>
    </>
    
)