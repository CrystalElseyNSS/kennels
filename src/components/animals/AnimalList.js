import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"

export default () => {
    const { animals } = useContext(AnimalContext)
    return (
        <div className="animals">
        {
            animals.map(loc => <Animal key={loc.id} animal={loc} />)
        }
        </div>
    )
}