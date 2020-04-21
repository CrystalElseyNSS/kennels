import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import { LocationContext } from "../locations/LocationProvider"

export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    return (
        <section className="employees">
        {
            employees.map(employee => {
            const foundLocation = locations.find(location => location.id === employee.locationId)
            return <Employee key={employee.id} employee={employee} location={foundLocation}/>})
        }
        </section>
    )
}