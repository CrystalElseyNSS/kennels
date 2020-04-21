import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"


export default () => {
    // const locations = useLocations():
    // Invoke useContext() in order to access the location data being returned in /LocationContext
    const { locations } = useContext(LocationContext)

    return (
        <div className="locations">
        {
            locations.map(loc => <Location key={loc.id} location={loc} />)
        }
        </div>
    )
}