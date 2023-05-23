import { createChannel } from "@/api/channel";
import { CreateChannel } from "@/components/channel/CreateChannel";
import { createChannelInputTypeToCreateChannelType } from "@/operations/channel/createChannelMapper";
import { CreateChannelInputType } from "@/types/Channel";
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
  const [channel, setChannel] = useState<CreateChannelInputType>({
    name: "",
    type: "public",
    members: "",
  });
  const route = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let { id, value } = e.target;
    const regexMembers = /^[0-9,]+$/;
    if (id == "members" && !regexMembers.test(value)) {
      value = channel.members;
    }
    setChannel((prev: any) => {
      return { ...prev, [id]: value };
    });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    await createChannel(
      user?.token!,
      createChannelInputTypeToCreateChannelType(channel)
    ).then((res) => {
      route.push("/channel");
    });
  };

  return (
    <CreateChannel
      channel={channel}
      handleChange={handleChange}
      submitHandler={submitHandler}
    />
  );
};

export default Create;
