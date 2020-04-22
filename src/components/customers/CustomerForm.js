import React, { useContext, useRef } from "react"
import { CustomerContext } from "./CustomerProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Customer.css"

export default props => {
    const { addCustomer } = useContext(CustomerContext)
    const { locations } = useContext(LocationContext)
    const name = useRef()
    const location = useRef()

    const constructNewCustomer = () => {
        const locationId = parseInt(location.current.value)
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addCustomer({
                name: name.current.value,
                locationId: locationId,
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="customerForm">  

            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerForm--name">Customer Name: </label>
                    <input
                        type="text"
                        id="customerForm--name"
                        ref={name}
                        required
                        className="form-control"
                        placeholder="Ex: Elizabeth Smith"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerForm--location">Main Location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="customerForm--location"
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
                constructNewCustomer()}}
                className="customerForm--submitBtn btn-info">
                Save Customer
            </button>

        </form>
    )
}