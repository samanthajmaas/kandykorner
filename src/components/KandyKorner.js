import React from "react"
import {LocationList} from "./locations/LocationList"
import {LocationsProvider} from "./locations/LocationsProvider"
import { ProductProvider } from "./products/ProductProvider"
import { TypeProvider } from "./products/ProductTypeProvider"
import { ProductList } from "./products/ProductList"

export const KandyKorner = () => (
    <>
     
     <h2>Locations</h2>
     <article>
         <LocationsProvider>
             <LocationList />
         </LocationsProvider>
     </article>

     <h2>Products</h2>
     <article>
         <ProductProvider>
             <TypeProvider>
                <ProductList />
             </TypeProvider>
         </ProductProvider>
     </article>
    </>
    
)