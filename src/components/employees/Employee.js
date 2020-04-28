import React from "react"
import "./Employee.css"

export default (props) => (
    <section className="employee">
        <h5 className="employee__name">Name: {props.employee.name}</h5>
        <div className="employee__position">Position: {props.employee.position}</div>
        <div className="employee__location">Store: {props.location.name}</div>
    </section>
)