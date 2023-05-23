import styles from "../../styles/channel.module.css";
import avatar from "../../ressources/avatar.webp"
import Image from "next/image";

export const MessageInput = () => {
    return (
        <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
            <Image
                className={styles.imageavatar}
                src={avatar}
                alt="avatar 3"
            />
            <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput2"
                placeholder="Type message"
            />
        </div>
    )
}
