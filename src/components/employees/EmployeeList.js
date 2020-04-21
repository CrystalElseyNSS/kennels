import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"

export default () => {
    const { employees } = useContext(EmployeeContext)
    return (
        <section className="employees">
        {
            employees.map(emp => <Employee key={emp.id} employee={emp} />)
        }
        </section>
    )
}