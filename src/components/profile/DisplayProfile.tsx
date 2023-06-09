import { User } from "@/types/User";
import avatar from "../../ressources/avatar.webp";
import Image from "next/image";
import { formaterDate } from "@/utils/dateFormatter";

export const DisplayProfile: React.FC<{ user: User }> = ({ user }) => {
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
        </div>
      </div>
    </section>
  );
};
