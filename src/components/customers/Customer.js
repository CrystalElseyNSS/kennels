import React from "react"
import "./Customer.css"

export default (props) => (
    <section className="customer">
        <h5 className="customer__name">Name: {props.customer.name}</h5>
        <div className="customer__location">Main Store: {props.location.name}</div>
    </section>
)