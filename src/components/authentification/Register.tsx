import { CreateUser } from "@/types/User";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ShowError } from "../ShowError";
import CreateUserSchema from "@/schema/CreateUserSchema";
export const Register = ({
  submitHandler,
}: {
  submitHandler: (createUser: CreateUser) => void;
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(CreateUserSchema),
  });

  return (
    <div>
      <div>
        <div className="container">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3">
              <h1>Register</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                {...register("name")}
              />
              {errors.name && <ShowError>{errors.name.message}</ShowError>}
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
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <input
                type="text"
                className="form-control"
                id="bio"
                {...register("bio")}
              />
              {errors.bio && <ShowError>{errors.bio.message}</ShowError>}
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
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <ShowError>{errors.confirmPassword.message}</ShowError>
              )}
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
