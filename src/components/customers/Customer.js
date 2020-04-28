import React from "react"
import "./Customer.css"

export default ({ customer }) => (
    <section className="customer">
        <h5 className="customer__name">Name: {customer.name}</h5>
    </section>
)