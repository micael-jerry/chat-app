import styles from "../../styles/channel.module.css";
import avatar from "../../ressources/avatar.webp";
import Image from "next/image";
import { Message } from "@/types/Message";

export const ReceivedMessage = ({ message }: { message: Message }) => {
  const { content, createdAt } = message;
  return (
    <div className="d-flex flex-row justify-content-start">
      <Image className={styles.imageavatar} src={avatar} alt="avatar 1" />
      <div>
        <p
          className="small p-2 ms-3 mb-1 rounded-3"
          // style="background-color: #f5f6f7;"
        >
          {content}
        </p>
        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
          {createdAt}
        </p>
      </div>
    </div>
  );
};
