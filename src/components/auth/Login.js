import React, { useRef } from "react"
import "./Auth.css"


const Login = props => {
    const email = useRef()
    const password = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/customers?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return user[0]
                }
                return false
            })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists && exists.password === password.current.value) {
                    localStorage.setItem("kennel_customer", exists.id)
                    props.toggle()
                } else if (exists && exists.password !== password.current.value) {
                    window.alert("Password does not match")
                } else if (!exists) {
                    window.alert("User account does not exist")
                }
            })
    }

    return (
        <article className="loginContainer">
            <form className="loginForm" onSubmit={handleLogin}>
                <h4 className="loginHeader">Please sign in: </h4>
                <fieldset>
                    <label htmlFor="email"> Email Address </label>
                    <input ref={email} type="email"
                        id="email"
                        className="form-control"
                        required 
                        autoFocus 
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="password"> Password </label>
                    <input ref={password} type="password"
                        id="password"
                        className="form-control"
                        required
                        autoFocus 
                    />
                </fieldset>
                <fieldset>
                    <button type="submit" className="login--btn">
                        Sign in 🐾
                    </button>
                </fieldset>
            </form>
        </article>
    )
}

export default Login