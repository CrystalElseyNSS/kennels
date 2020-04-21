import React from "react"
import "./Customer.css"

export default (props) => (
    <section className="customer">
        <h3 className="customer__name">Name: {props.customer.name}</h3>
        <div className="customer__animal">Pet: {props.animal.name}</div>
    </section>
)