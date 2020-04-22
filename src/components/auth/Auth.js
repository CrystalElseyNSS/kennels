import React from "react"
import Login from "./Login"
import Register from "./Register"
import "./Auth.css"

export default ({toggle}) => {
    return (
        <>
            <main className="authContainer">
                <header className="headerContainer">
                    <h1 className="header--name">Nashville Kennels</h1>
                    <h2 className="header--tagline">"Loving care when you're not there"</h2>
                </header>
                <Login toggle={toggle} />
                <Register toggle={toggle} />
            </main>
        </>
    )
}