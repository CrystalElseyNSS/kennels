import React from "react"
import "./Location.css"

export default (props) => (
    <section className="location">
        <h3 className="location__name">Store: {props.location.name}</h3>
        <address className="location__address">Address: {props.location.address}</address>
    </section>
)