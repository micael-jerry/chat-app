import Link from "next/link";
import styles from "../styles/home.module.css";
import { getSession } from "next-auth/react";
import { GetSessionType } from "@/types/Session";

export const getServerSideProps = async (context: any) => {
  const session: GetSessionType = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/channel",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <h1 className="mb-3">HOME page</h1>
        <Link className="btn btn-outline-secondary" href={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
}
