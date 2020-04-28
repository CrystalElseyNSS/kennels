import React, { useState, useEffect } from "react"
import { Button } from "reactstrap"
import { AnimalProvider } from "./animals/AnimalProvider"
import AnimalList from "./animals/AnimalList"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import { CustomerProvider } from "./customers/CustomerProvider"
import CustomerList from "./customers/CustomerList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"
import { SearchBar } from "./search/SearchBar"
import { SearchResults } from "./search/SearchResults"
import "./Dashboard.css"

export const Dashboard = () => {
    const [searchTerms, setTerms] = useState("")
    const [activeList, setActiveList] = useState("locations")
    const [components, setComponents] = useState()

    const showLocations = () => (
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    )

    const showCustomers = () => (
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
    )

    const showEmployees = () => (
        <EmployeeProvider>
            <LocationProvider>
                <EmployeeList />
            </LocationProvider>
        </EmployeeProvider>
    )

    const showAnimals = () => (
        <AnimalProvider>
            <LocationProvider>
                <AnimalList />
            </LocationProvider>
        </AnimalProvider>
    )    

    useEffect(() => {
        if (activeList === "customers") {
            setComponents(showCustomers)
        }
        else if (activeList === "locations") {
            setComponents(showLocations)
        }
        else if (activeList === "employees") {
            setComponents(showEmployees)
        }
        else if (activeList === "animals") {
            setComponents(showAnimals)
        }
    }, [activeList])

    return (
        <>
            <main className="mainContainer">

                <header className="headerContainer">
                    <h1 className="header--name">Nashville Kennels</h1>
                    <h2 className="header--tagline">"Loving care when you're not there"</h2>
                </header>
            
                <section className="menuContainer">
                    <div className="links">
                        <Button className="link" onClick={() => setActiveList("locations")}>Locations</Button>
                        <Button className="link" onClick={() => setActiveList("customers")}>Customers</Button>
                        <Button className="link" onClick={() => setActiveList("employees")}>Employees</Button>
                        <Button className="link" onClick={() => setActiveList("animals")}>Animals</Button>
                    </div>
                    <div className="search">
                        <AnimalProvider>
                            <CustomerProvider>
                                <LocationProvider>
                                    <SearchBar setTerms={setTerms} />
                                    <SearchResults searchTerms={searchTerms} />
                                </LocationProvider>
                            </CustomerProvider>
                        </AnimalProvider>
                    </div> 
                </section>

                <section className="dataContainer">
                    {components}
                </section>   

            </main>
        </>
    )
}