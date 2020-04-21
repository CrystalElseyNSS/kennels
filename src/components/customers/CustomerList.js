import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import { AnimalContext } from "../animals/AnimalProvider"
import Customer from "./Customer"

export default () => {
    const { customers } = useContext(CustomerContext)
    const { animals } = useContext(AnimalContext)
    return (
        <section className="customers">
        {
            customers.map(customer => {
                const foundAnimal = animals.find(animal => animal.id === customer.animalId)
                return <Customer key={customer.id} customer={customer} animal={foundAnimal}/>
            })
        }
        </section>
    )
}