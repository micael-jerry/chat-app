"use client";

import axios from "axios";
import Link from "next/link";
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
        <div className="container">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <h1>Register</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="name_field" className="form-label">Name</label>
              <input type="text" className="form-control" id="name_field" value={name} onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email_field" className="form-label">Email address</label>
              <input className="form-control" type="email" id="email_field" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password_field" className="form-label">Password</label>
              <input type="password" className="form-control" id="password_field" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <div>
              <p>
                You have an account? <Link href="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;