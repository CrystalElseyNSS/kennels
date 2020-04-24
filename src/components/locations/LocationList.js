import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"



export default () => {
    
    const { locations } = useContext(LocationContext)

    return (
        <article className="locationContainer">

            <header className="location__header">
                <h2 className="location__heading">Locations</h2>
            </header>

            <section className="location__list">
                {locations.map(loc => <Location key={loc.id} location={loc} />)}
            </section>
        </article>
    )
}