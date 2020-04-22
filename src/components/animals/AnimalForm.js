import React, { useContext, useRef } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Animal.css"

export default props => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const name = useRef()
    const breed = useRef()
    const location = useRef()

    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: name.current.value,
                breed: breed.current.value,
                locationId: locationId,
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="animalForm">  

            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalForm--name">Animal Name: </label>
                    <input
                        type="text"
                        id="animalForm--name"
                        ref={name}
                        required
                        className="form-control"
                        placeholder="Ex: Fluffy Smith"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalForm--breed">Animal Breed: </label>
                    <input
                        type="text"
                        id="animalForm--breed"
                        ref={breed}
                        required
                        className="form-control"
                        placeholder="Ex: Pomeranian"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalForm--location">Preferred location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="animalForm--location"
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
                constructNewAnimal()}}
                className="animalForm--submitBtn btn-info">
                Save Pet
            </button>

        </form>
    )
}