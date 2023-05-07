"use client";

import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const submitHandler = async (e: any) => {
    e.preventDefault();

    await axios.post("/api/register", {
      name, email, password
    }).then(data => console.log(data))
      .catch(err => console.log(err))
  };

  return (
    <div>
      <div>
        <div>
          <form onSubmit={submitHandler}>
            <h1>Register</h1>
            <div>
              <label htmlFor="name_field">Name</label>
              <input
                type="text"
                id="name_field"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div >
              <label htmlFor="email_field">
                Email address
              </label>
              <input
                type="email"
                id="email_field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password_field">
                Password
              </label>
              <input
                type="password"
                id="password_field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;