import React from "react"
import "./Animal.css"

export default (props) => (
    <section className="animal">
        <h3 className="animal__name">Name: {props.animal.name}</h3>
        <div className="animal__breed">Breed: {props.animal.breed}</div>
        {/* <div className="animal__owner">Owner: {props.customer.name}</div> */}
        {/* <div className="animal__location">Location: {props.location.name}</div> */}
    </section>
)