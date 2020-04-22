import React from "react"

import { AnimalProvider } from "./animals/AnimalProvider"
import AnimalList from "./animals/AnimalList"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import { CustomerProvider } from "./customers/CustomerProvider"
import CustomerList from "./customers/CustomerList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"
import "./Dashboard.css"

export default () => (
    <>
 
        <AnimalProvider>
            <CustomerProvider>
                <LocationProvider>
                    <AnimalList />
                </LocationProvider>
            </CustomerProvider>
        </AnimalProvider>

       
        <LocationProvider>
            <LocationList />
        </LocationProvider>


        <CustomerProvider>
            <AnimalProvider>
                <LocationProvider>
                    <CustomerList />
                </LocationProvider>        
            </AnimalProvider>
        </CustomerProvider>

        
            <EmployeeProvider>
                <LocationProvider>
                    <EmployeeList />
                </LocationProvider>
            </EmployeeProvider>
    </>
)