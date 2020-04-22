import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"


export default () => {
    
    const { locations } = useContext(LocationContext)

    return (
        <section className="locations">
        {
            locations.map(loc => <Location key={loc.id} location={loc} />)
        }
        </section>
    )
}