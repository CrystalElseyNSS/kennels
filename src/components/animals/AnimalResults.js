import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalSearchResults = ({ animalSearchTerms }) => {
    const { animals } = useContext(AnimalContext)
    const [ filteredAnimals, setFiltered ] = useState([])

    useEffect(() => {
        if (animalSearchTerms !== "") {
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(animalSearchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [animalSearchTerms, animals])

    return (
        <div className="animalSearch--results">
            <p>Results:</p>
            <div className="animalResults--list">
                {filteredAnimals.map(animal => <div key={ animal.id }>{ animal.name }</div>)}
            </div>
        </div>
    )
}