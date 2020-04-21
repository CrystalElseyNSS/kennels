import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import { CustomerContext } from "../customers/CustomerProvider"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { customers } = useContext(CustomerContext)
    
    return (
        <section className="animals">
            {
                animals.map(animal => {
                    const foundCustomer = customers.find(customer => customer.id === animal.customerId)
                    return <Animal key={animal.id} animal={animal} customer={foundCustomer}/>
                })
            }
        </section>
    )
}