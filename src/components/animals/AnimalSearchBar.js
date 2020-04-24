import React, { useRef } from "react"
import "./Animal.css"

export const AnimalSearchBar = ({ setAnimalTerms }) => {

    const { terms } = useRef()

    return (
        <fieldset className="animalSearch--input">
            <div className="form-group">
                <label htmlFor="animalSearchTerms">Search:</label>
                <input onKeyUp={ e => setAnimalTerms(e.target.value) }
                    type="text"
                    id="animalSearchTerms"
                    ref={terms}
                    required
                    autoFocus
                    className="form-control"
                />
            </div>
        </fieldset>
    )
}