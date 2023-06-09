import { logout } from "@/operations/login/login";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const NavBar: React.FC = () => {
  const { data } = useSession();
  const route = useRouter();

  const logOutAndRedirect = async () => {
    await route.push("/");
    await logout();
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
              <div className="me-2 ms-2">
                <Link href={"/message"} className="btn btn-outline-secondary">
                  Message
                </Link>
              </div>
              <div className="me-2 ms-2">
                <Link href={"/channel"} className="btn btn-outline-secondary">
                  Channel
                </Link>
              </div>
              <div className="me-2 ms-2">
                <Link href={"/profile"} className="btn btn-outline-secondary">
                  {data?.user?.name}
                </Link>
              </div>
              <div className="me-2 ms-2">
                <button
                  className="logoutButton btn btn-outline-secondary"
                  onClick={async () => logOutAndRedirect()}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
