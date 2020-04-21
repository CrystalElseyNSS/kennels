import React from "react"
import "./Employee.css"

export default (props) => (
    <section className="employee">
        <h3 className="employee__name">Name: {props.employee.name}</h3>
        <div className="employee__position">Position: {props.employee.position}</div>
    </section>
)