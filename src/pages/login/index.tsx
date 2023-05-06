"use client"

import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const submitHandler = (e: any) => {
    e.preventDefault();
  }

  return (
    <div >
      <div >
        <div >
          <form
            onSubmit={submitHandler}
          >
            <h1>Login</h1>
            <div>
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
            <div >
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
            <button type="submit">
              Sign in
            </button>
            <div>
              <p>
                Not a member? <Link href="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;