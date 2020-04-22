import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { CustomerContext } from "./CustomerProvider"
import { AnimalContext } from "../animals/AnimalProvider"
import { LocationContext } from "../locations/LocationProvider"
import CustomerForm from "./CustomerForm"
import Customer from "./Customer"
import "./Customer.css"

export default () => {
    const { customers } = useContext(CustomerContext)
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <article className="customerContainer">

                <header className="customer__header">
                    <h2 className="customer__heading">Customers</h2>
                    <div className="customerForm__link" onClick={toggle}>
                        <Button className="customerForm__button">Enter New Customer</Button>{' '}
                    </div>
                </header>

                <section className="customer__list">
                    {customers.map(customer => {
                        const foundAnimal = animals.find(animal => animal.id === customer.animalId)
                        const foundLocation = locations.find(location => location.id === customer.locationId)
                        return <Customer key={customer.id} customer={customer} animal={foundAnimal} location={foundLocation}/>})}
                </section>
        
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        <h3 className="customerForm__title">Enter Customer Information:</h3>
                    </ModalHeader>
                    <ModalBody>
                        <CustomerForm toggler={toggle} />
                    </ModalBody>
                </Modal>

            </article>
        </>
    )
}