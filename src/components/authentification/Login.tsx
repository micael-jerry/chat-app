import { UserLogin } from "@/types/User";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UserLoginSchema from "@/schema/UserLoginSchema";
import { ShowError } from "../ShowError";

export const Login = ({
  submitHandler,
}: {
  submitHandler: (userLogin: UserLogin) => void;
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
              <button className="btn btn-primary" type="submit">
                Sign in
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
