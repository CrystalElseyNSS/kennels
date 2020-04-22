import React, { useContext, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import { LocationContext } from "../locations/LocationProvider"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import AnimalForm from "./AnimalForm"
import "./Animal.css"


export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    
    return (
        <article className="animalContainer">

            <header className="animal__header">
                <h2 className="animal__heading">animals</h2>
                <div className="animalForm__link" onClick={toggle}>
                        <Button className="animalForm__button">Enter New Pet</Button>{' '}
                </div>
            </header>

            <section className="animal__list">
                {animals.map(animal => {
                    const foundLocation = locations.find(location => location.id === animal.locationId)
                    return <Animal key={animal.id} animal={animal} location={foundLocation}/>})}
            </section>
        
            <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        <h3 className="employeeForm__title">Enter Pet Information:</h3>
                    </ModalHeader>
                    <ModalBody>
                        <AnimalForm toggler={toggle} />
                    </ModalBody>
            </Modal>      

        </article>
    )
}