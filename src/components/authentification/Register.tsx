import { CreateUser } from "@/types/User";
import Link from "next/link";
import { ChangeEvent } from "react";

export const Register = ({
  createUser,
  handleChange,
  submitHandler,
}: {
  createUser: CreateUser;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: any) => void;
}) => {
  const { name, email, password, bio } = createUser;
  return (
    <div>
      <div>
        <div className="container">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <h1>Login</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <input
                type="text"
                className="form-control"
                id="bio"
                value={bio ? bio : ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
            </div>
            <div>
              <p>
                Not a member? <Link href="/sign-up">Sign-up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
