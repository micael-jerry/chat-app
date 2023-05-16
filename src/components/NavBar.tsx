import { logout } from "@/operations/login/login";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const NavBar: React.FC = () => {
  const { data } = useSession();
  const route = useRouter();

  const logOutAndRedirect = () => {
    logout();
    route.push("/");
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link href={"/"} className="navbar-brand">
            CHAT-APP
          </Link>
          {data?.user !== undefined && (
            <div className="d-flex">
              <div>
                <Link href={"/profile"} className="btn btn-outline-success">
                  {data?.user?.name}
                </Link>
              </div>
              <div>
                <button
                  className="btn btn-outline-success"
                  onClick={() => logOutAndRedirect()}
                >
                  SignOut
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
