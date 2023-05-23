import styles from "../../styles/styles.module.css";
import avatar from "../../ressources/avatar.webp";
import Image from "next/image";

export const ReceiveMessage = () => {
    return (
        <div className="d-flex flex-row justify-content-start">
            <Image
                className={styles.imageavatar}
                src={avatar}
                alt="avatar 1"
            />
            <div>
                <p
                    className="small p-2 ms-3 mb-1 rounded-3"
                // style="background-color: #f5f6f7;"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
                <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                    12:00 PM | Aug 13
                </p>
            </div>
        </div>
    )
}
