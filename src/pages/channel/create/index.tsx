import { createChannel } from "@/api/channel";
import { CreateChannel } from "@/components/channel/CreateChannel";
import { CreateChannelType } from "@/types/Channel";
import { GetSessionType } from "@/types/Session";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

export const getServerSideProps = async (context: any) => {
  const session: GetSessionType = await getSession(context);
  return {
    props: {
      session: session,
    },
  };
};

export const Create = ({ session }: { session: GetSessionType }) => {
  const user: User = session?.user;
  const [channel, setChannel] = useState<CreateChannelType>({
    name: "",
    type: "public",
    members: ""
  });
  const route = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setChannel((prev: any) => {
      return { ...prev, [id]: value };
    });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    await createChannel(user?.token!, channel)
      .then((res) => {
        route.push("/channel");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CreateChannel channel={channel} handleChange={handleChange} submitHandler={submitHandler} />
  );
}

export default Create;