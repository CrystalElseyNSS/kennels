import React from "react"
import "./Animal.css"

export default ({ animal, location }) => (
    <section className="animal">
        <h5 className="animal__name">Name: {animal.name}</h5>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__location">Location: {location.name}</div>
    </section>
)