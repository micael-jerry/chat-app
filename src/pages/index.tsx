import Link from "next/link";
import styles from "../styles/home.module.css";

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
