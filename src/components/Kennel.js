import React from "react"

import { AnimalProvider } from "./animals/AnimalProvider"
import AnimalList from "./animals/AnimalList"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import { CustomerProvider } from "./customers/CustomerProvider"
import CustomerList from "./customers/CustomerList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"

export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
            <AnimalProvider>
                <CustomerProvider>
                    <LocationProvider>
                        <AnimalList />
                    </LocationProvider>
                </CustomerProvider>
            </AnimalProvider>

        <h2>Locations</h2>
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