import React from "react"
import "./Location.css"

export default (props) => (
    <section className="location">
        <h5 className="location__name">Store: {props.location.name}</h5>
        <address className="location__address">Address: {props.location.address}</address>
    </section>
)