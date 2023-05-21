import { NavBar } from "@/components/NavBar";
import { getSession, useSession } from "next-auth/react";

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: {
      session: session
    }
  }
}

const Profile = () => {
  const { data } = useSession();
  const userSession: object = { ...data?.user };
  return (
    <>
      <NavBar />
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5"
                    />
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
                          <p className="text-muted">{userSession.id}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Member since</h6>
                          <p className="text-muted">{userSession.createdAt}</p>
                        </div>
                        <h6>Profile</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="col-6 mb-3">
                          <h6>Name</h6>
                          <p className="text-muted">{userSession.name}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{userSession?.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Bio</h6>
                          <p className="text-muted">{userSession?.bio}</p>
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
    </>
  );
};

export default Profile;
