"use client"

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const route = useRouter();

  const submitHandler = async (e: any) => {
    e.preventDefault();

    await signIn('credentials', {
      redirect: false,
      email,
      password
    }).then(data => {
      console.log(data);
      route.push('/global')
    })
      .catch(err => console.log(err))
  }

  return (
    <div >
      <div >
        <div className="container">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <h1>Login</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="email_field" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email_field" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password_field" className="form-label">Password</label>
              <input type="password" id="password_field" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">Sign in</button>
            </div>
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