import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Employee.css"

export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const name = useRef()
    const location = useRef()
    const position = useRef()

    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: name.current.value,
                locationId: locationId,
                position: position.current.value
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="employeeForm">  

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeForm--name">Employee Name: </label>
                    <input
                        type="text"
                        id="employeeForm--name"
                        ref={name}
                        required
                        className="form-control"
                        placeholder="Ex: Elizabeth Smith"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeForm--position">Employee Position: </label>
                    <input
                        type="text"
                        id="employeeForm--position"
                        ref={position}
                        required
                        className="form-control"
                        placeholder="Ex: Part-Time Sales Associate"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeForm--location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="employeeForm--location"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <button type="submit" onClick={evt => {
                evt.preventDefault()
                constructNewEmployee()}}
                className="employeeForm--submitBtn btn-info">
                Save Employee
            </button>

        </form>
    )
}