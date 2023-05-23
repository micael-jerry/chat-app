import styles from "../../styles/styles.module.css";
import avatar from "../../ressources/avatar.webp"
import Image from "next/image";

export const SendMessage = () => {
    return (
        <div className="d-flex flex-row justify-content-end">
            <div>
                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
                <p className="small me-3 mb-3 rounded-3 text-muted">
                    12:00 PM | Aug 13
                </p>
            </div>
            <Image
                className={styles.imageavatar}
                src={avatar}
                alt="avatar 1"
            />
        </div>
    )
}
