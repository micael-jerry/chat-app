import { Message } from "@/types/Message";
import styles from "../../styles/channel.module.css";
import { SendedMessage } from "./SendedMessage";
import { ReceivedMessage } from "./ReceivedMessage";

export const MessageRenderer = ({
  userLogedId,
  messages,
}: {
  userLogedId: number;
  messages: Message[];
}) => {
  return (
    <div
      id={styles.droite}
      className="pt-3 pe-3"
      data-mdb-perfect-scrollbar="true"
    >
      {messages.map((message: Message) => {
        if (message.senderId === userLogedId) {
          return <SendedMessage key={message.id} message={message} />;
        }
        return <ReceivedMessage key={message.id} message={message} />;
      })}
    </div>
  );
};
