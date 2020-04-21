import React from "react"
import "./Animal.css"

export default ({animal, customer}) => (
    <section className="animal">
        <h3 className="animal__name">Name: {animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__owner">Owner: {customer.name}</div>
    </section>
)