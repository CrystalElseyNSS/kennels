import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import Customer from "./Customer"
import "./Customer.css"

export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <>
            <article className="customerContainer">
                <header className="customer__header">
                    <h2 className="customer__heading">Customers</h2>
                </header>
                <section className="customer__list">
                    {customers.map(customer => {
                        return <Customer key={customer.id} customer={customer}/>})}
                </section>

            </article>
        </>
    )
}