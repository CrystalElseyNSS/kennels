import React, { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import { LocationContext } from "../locations/LocationProvider"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import EmployeeForm from "./EmployeeForm"
import "./Employee.css"


export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <article className="employeeContainer">

                <header className="employee__header">
                    <h2 className="employee__heading">Employees</h2>
                    <div className="employeeForm__link" onClick={toggle}>
                        <Button className="employeeForm__button">Enter New Employee</Button>{' '}
                    </div>
                </header>
                
                <section className="employee__list">
                    {employees.map(employee => {
                        const foundLocation = locations.find(location => location.id === employee.locationId)
                        return <Employee key={employee.id} employee={employee} location={foundLocation}/>})}
                </section>

                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        <h3 className="employeeForm__title">Enter Employee Information:</h3>
                    </ModalHeader>
                    <ModalBody>
                        <EmployeeForm toggler={toggle} />
                    </ModalBody>
                </Modal>

            </article>
        </>
    )
}