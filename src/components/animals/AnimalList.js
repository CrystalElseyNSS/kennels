import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import { CustomerContext } from "../customers/CustomerProvider"
import { LocationContext } from "../locations/LocationProvider"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { customers } = useContext(CustomerContext)
    const { locations } = useContext(LocationContext)
    
    return (
        <section className="animals">
            {
                animals.map(animal => {
                    const foundCustomer = customers.find(customer => customer.id === animal.customerId)
                    const foundLocation = locations.find(location => location.id === animal.locationId)
                    return <Animal key={animal.id} animal={animal} customer={foundCustomer} location={foundLocation}/>
                })
            }
        </section>
    )
}