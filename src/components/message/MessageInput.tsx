import styles from "../../styles/styles.module.css";
import avatar from "../../ressources/avatar.webp";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { CreateMessage } from "@/types/Message";
import { User } from "@/types/User";
import { sendMessage } from "@/api/message";

export const MessageInput: React.FC<{ channelId: number; userLoged: User }> = ({
  channelId,
  userLoged,
}) => {
  const [message, setMessage] = useState<CreateMessage>({
    channelId: channelId,
    recipientId: null,
    content: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMessage((prev: any) => {
      return { ...prev, content: value };
    });
  };

  const submitMessage = async () => {
    await sendMessage(userLoged?.token!, message);
    setMessage((prev: any) => {
      return { ...prev, content: "" };
    });
    window.location.reload();
  };

  return (
    <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
      <Image className={styles.imageavatar} src={avatar} alt="avatar 3" />
      <input
        type="text"
        className="form-control form-control-lg"
        id="content"
        placeholder="Type message"
        value={message.content}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={submitMessage}>Send</button>
    </div>
  );
};
