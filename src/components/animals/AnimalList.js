import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"

export default () => {
    const { animals } = useContext(AnimalContext)
    return (
        <section className="animals">
        {
            animals.map(anim => <Animal key={anim.id} animal={anim} />)
        }
        </section>
    )
}