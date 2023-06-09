import { User } from "@/types/User";
import avatar from "../../ressources/avatar.webp";
import Image from "next/image";
import { formaterDate } from "@/utils/dateFormatter";
import { UpdateUserInput } from "@/types/inputs/InputUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UpdateUserSchema from "@/schema/UpdateUserSchema";
import { ShowError } from "../ShowError";

export const DisplayProfile: React.FC<{ user: User, submitHandler: (updateUserInput: UpdateUserInput) => void }> = ({ user, submitHandler }) => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(UpdateUserSchema)
  })

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 gradient-custom text-center text-white">
                  <Image src={avatar} alt="Avatar" className="img-fluid my-5" />
                  <h5>Marie Horwitz</h5>
                  <p>Web Designer</p>
                  <i className="far fa-edit mb-5"></i>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Id</h6>
                        <p className="text-muted">{user?.id}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Member since</h6>
                        <p className="text-muted">
                          {formaterDate(user?.createdAt!)}
                        </p>
                      </div>
                      <h6>Profile</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="col-6 mb-3">
                        <h6>Name</h6>
                        <p className="text-muted">{user?.name}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{user?.email}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Bio</h6>
                        <p className="text-muted">{user?.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <form name="editProfileForm" onSubmit={handleSubmit(submitHandler)}>
              <div className="mb-3">
                <h1>Edit Profile</h1>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder={user?.name!}
                  {...register("name")}
                />
                {errors.name && <ShowError>{errors.name.message}</ShowError>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                {/* Email not update */}
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  disabled
                  placeholder={user?.email!}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="currentPassword" className="form-label">
                Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  className="form-control"
                  placeholder="********"
                  {...register("currentPassword")}
                />
                {errors.currentPassword && (
                  <ShowError>{errors.currentPassword.message}</ShowError>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="form-control"
                  placeholder="********"
                  {...register("newPassword")}
                />
                {errors.newPassword && (
                  <ShowError>{errors.newPassword.message}</ShowError>
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
                  placeholder="********"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <ShowError>{errors.confirmPassword.message}</ShowError>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="bio" className="form-label">
                  Bio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bio"
                  placeholder={user?.bio ? user.bio : "input bio"}
                  {...register("bio")}
                />
                {errors.bio && <ShowError>{errors.bio.message}</ShowError>}
              </div>
              <div className="mb-3">
                <button className="updateProfileButton btn btn-primary" type="submit">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
