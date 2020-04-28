import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "../animals/AnimalProvider"
import Animal from "../animals/Animal"
import { EditAnimalForm } from "../animals/EditAnimalForm"
import { CustomerContext } from "../customers/CustomerProvider"
import { LocationContext } from "../locations/LocationProvider"
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap"
import "../animals/Animal.css"


export const SearchResults = ({ searchTerms }) => {
    const { animals, releaseAnimal } = useContext(AnimalContext)
    const { customers } = useContext(CustomerContext)
    const { locations } = useContext(LocationContext)

    const [filteredAnimals, setFiltered] = useState([])
    const [selectedAnimal, setAnimal] = useState({animal: {id:0}, location: "", customer: ""})

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, animals])

    return (
        <div className="searchResults">
            
            <div className="animals">
                {
                    filteredAnimals.map(animal => <div>
                        <Button className="petInfo--btn"
                        onClick={() => {
                            const location = locations.find(l => l.id === animal.locationId)
                            const customer = customers.find(c => c.id === animal.customerId)

                            setAnimal({ animal, location, customer })
                            toggle()
                        }}
                    >{animal.name}
                    : Get Pet Info</Button>{' '}
                    </div>)
                }
            </div>

            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    { selectedAnimal.animal.name }
                </ModalHeader>
                <ModalBody>
                    <EditAnimalForm key={selectedAnimal.animal.id} toggleEdit={toggleEdit} {...selectedAnimal} />
                </ModalBody>
            </Modal>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    { selectedAnimal.animal.name }
                </ModalHeader>
                <ModalBody>
                    <Animal key={selectedAnimal.animal.id} {...selectedAnimal} />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => {
                        toggle()
                        toggleEdit()
                    }}>Edit</Button>
                    <Button color="danger" onClick={() => {
                        releaseAnimal(selectedAnimal.animal.id)
                        toggle()
                    }}>Delete</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}