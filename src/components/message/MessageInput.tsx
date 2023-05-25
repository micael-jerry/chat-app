import styles from "../../styles/styles.module.css";
import avatar from "../../ressources/avatar.webp";
import Image from "next/image";
import { CreateMessage } from "@/types/Message";
import { User } from "@/types/User";
import { sendMessage } from "@/api/message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateMessageSchema from "@/schema/CreateMessageSchema";
import { ShowError } from "../ShowError";

export const MessageInput: React.FC<{ channelId: number; userLoged: User }> = ({
  channelId,
  userLoged,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      channelId: channelId,
      content: "",
    },
    resolver: yupResolver(CreateMessageSchema),
  });

  const submitMessage = async (message: CreateMessage) => {
    await sendMessage(userLoged?.token!, message);
    window.location.reload();
  };

  return (
    <>
      <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
        <Image className={styles.imageavatar} src={avatar} alt="avatar 3" />
        <input
          type="textarea"
          className="form-control form-control-lg"
          id="content"
          placeholder="Type message"
          {...register("content")}
        />
        <button onClick={handleSubmit(submitMessage)}>Send</button>
      </div>
      {errors.content && <ShowError>{errors.content.message}</ShowError>}
    </>
  );
};
