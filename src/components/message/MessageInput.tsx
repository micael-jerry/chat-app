import styles from "../../styles/styles.module.css";
import avatar from "../../ressources/avatar.webp";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateMessageSchema from "@/schema/CreateMessageSchema";
import { ShowError } from "../ShowError";
import { CreateMessageInput } from "@/types/inputs/InputMessage";

export const MessageInput: React.FC<{
  channelId?: number;
  recipientId?: number;
  submitMessage: (message: CreateMessageInput) => void;
}> = ({ channelId, recipientId, submitMessage }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      channelId: channelId && channelId,
      recipientId: recipientId && recipientId,
      message: "",
    },
    resolver: yupResolver(CreateMessageSchema),
  });

  return (
    <>
      <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
        <Image className={styles.imageavatar} src={avatar} alt="avatar 3" />
        <input
          type="textarea"
          className="form-control form-control-lg"
          id="message"
          placeholder="Type message"
          {...register("message")}
        />
        <button className="sendMessageButton" onClick={handleSubmit(submitMessage)}>Send Message</button>
      </div>
      {errors.message && <ShowError>{errors.message.message}</ShowError>}
    </>
  );
};
