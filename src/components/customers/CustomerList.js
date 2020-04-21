import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import Customer from "./Customer"

export default () => {
    const { customers } = useContext(CustomerContext)
    return (
        <section className="customers">
        {
            customers.map(cust => <Customer key={cust.id} customer={cust} />)
        }
        </section>
    )
}