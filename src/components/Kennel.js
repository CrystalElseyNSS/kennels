import React from "react"

import { AnimalProvider } from "./animals/AnimalProvider"
import AnimalList from "./animals/AnimalList"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"

import Customer from "./customers/Customer"
import Employee from "./employees/Employee"

export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>
        </article>

        <h2>Locations</h2>
            <LocationProvider>
                <LocationList />
            </LocationProvider>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
    </>
)