import styles from "../../styles/styles.module.css";
import avatar from "../../ressources/avatar.webp";
import Image from "next/image";
import { Message } from "@/types/Message";
import { formaterDate } from "@/utils/dateFormatter";

export const SendedMessage = ({ message }: { message: Message }) => {
  const { content, createdAt } = message;
  return (
    <div className="d-flex flex-row justify-content-end">
      <div>
        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
          {content}
        </p>
        <p className="small me-3 mb-3 rounded-3 text-muted">
          {formaterDate(createdAt)}
        </p>
      </div>
      <Image className={styles.imageavatar} src={avatar} alt="avatar 1" />
    </div>
  );
};
