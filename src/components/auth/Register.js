import React, { useRef } from "react"
import "./Auth.css"

const Register = props => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/customers?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return true
                }
                return false
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            existingUserCheck()
                .then(() => {
                    fetch("http://localhost:8088/customers", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            password: password.current.value,
                            name: `${firstName.current.value} ${lastName.current.value}`
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("kennel_customer", createdUser.id)
                            }
                        })
                })
        } else {
            window.alert("Passwords do not match")
        }
    }

    return (
        <article className="registerContainer">
            <form className="registerForm" onSubmit={handleRegister}>
                <h4>New customer? Please register an account: </h4>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="Ex: John"
                        required  
                        autoFocus
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Ex: Smith"
                        required 
                        autoFocus
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input ref={email} type="email"
                        name="email"
                        className="form-control"
                        placeholder="Ex: johnsmith@email.com"
                        required 
                        autoFocus
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="password"> Password </label>
                    <input ref={password} type="password"
                        name="password"
                        className="form-control"
                        placeholder="Ex: Abc123$!"
                        required 
                        autoFocus
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        required />
                </fieldset>
                <fieldset>
                    <button className="login--btn" type="submit">
                        Register    🐾
                    </button>
                </fieldset>
            </form>
        </article>
    )
}

export default Register