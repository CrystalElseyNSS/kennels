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


export default () => {  
    return (
        <AnimalProvider>
            <CustomerProvider>
                <EmployeeProvider>
                    <LocationProvider>
                        <div className="dataContainer">
                            <header className="headerContainer">
                                <h1 className="header--name">Nashville Kennels</h1>
                                <h2 className="header--tagline">"Loving care when you're not there"</h2>
                            </header>
                            <LocationList />
                            <AnimalList />
                            <CustomerList />
                            <EmployeeList />
                        </div>
                    </LocationProvider>
                </EmployeeProvider>
            </CustomerProvider>
        </AnimalProvider>
        
    )
}