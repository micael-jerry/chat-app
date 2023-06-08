import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UserLoginSchema from "@/schema/UserLoginSchema";
import { ShowError } from "../ShowError";
import { UserLoginInput } from "@/types/inputs/InputUser";

export const Login = ({
  submitHandler,
}: {
  submitHandler: (userLoginInput: UserLoginInput) => void;
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(UserLoginSchema),
  });
  return (
    <div>
      <div>
        <div className="container">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3">
              <h1>Login</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...register("email")}
              />
              {errors.email && <ShowError>{errors.email.message}</ShowError>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                {...register("password")}
              />
              {errors.password && (
                <ShowError>{errors.password.message}</ShowError>
              )}
            </div>
            <div className="mb-3">
              <button className="loginButton btn btn-primary" type="submit">
                Login
              </button>
            </div>
            <div>
              <p>
                Not a member? <Link href="/sign-up">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
