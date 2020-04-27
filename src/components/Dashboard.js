import React, { useState } from "react"
import { AnimalProvider } from "./animals/AnimalProvider"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import { CustomerProvider } from "./customers/CustomerProvider"
import CustomerList from "./customers/CustomerList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"
import { SearchBar } from "./search/SearchBar"
import { SearchResults } from "./search/SearchResults"
import "./Dashboard.css"
import "./Layout.css"

export const Dashboard = () => {
    const [searchTerms, setTerms] = useState("")

    return (
        <div className="mainContainer">
            <AnimalProvider>
                <CustomerProvider>
                    <EmployeeProvider>
                        <LocationProvider>
                            <div className="searchContainer">
                                <SearchBar setTerms={setTerms} />
                                <SearchResults searchTerms={searchTerms} />
                            </div>
                            <div className="dataContainer">
                                <header className="headerContainer">
                                    <h1 className="header--name">Nashville Kennels</h1>
                                    <h2 className="header--tagline">"Loving care when you're not there"</h2>
                                </header>
                            <LocationList />
                            <CustomerList />
                            <EmployeeList />
                        </div>
                        </LocationProvider>
                    </EmployeeProvider>
                </CustomerProvider>
            </AnimalProvider>
        </div>
    )
}