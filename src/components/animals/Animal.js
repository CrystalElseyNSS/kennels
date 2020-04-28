import React from "react"
import "./Animal.css"

export default (props) => (
    <section className="animal">
        <h5 className="animal__name">Name: {props.animal.name}</h5>
        <div className="animal__breed">Breed: {props.animal.breed}</div>
    </section>
)