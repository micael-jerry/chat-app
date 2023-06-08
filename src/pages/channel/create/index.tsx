import { createChannel } from "@/api/channel";
import { getUsers } from "@/api/user";
import { CreateChannel } from "@/components/channel/CreateChannel";
import { inputToCreateChannel, refreshMembersCreateChannel } from "@/mapper/ChannelMapper";
import { CreateChannelType, GetChannelType } from "@/types/Channel";
import { GetSessionType } from "@/types/Session";
import { GetUsersType, User } from "@/types/User";
import { CreateChannelInputType } from "@/types/inputs/InputChannel";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export const getServerSideProps = async (context: any) => {
  const session: GetSessionType = await getSession(context);
  const userLoged: User = session?.user;
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const users = await getUsers(userLoged?.token!);
  return {
    props: {
      session,
      users,
    },
  };
};

export const Create = ({
  session,
  users,
}: {
  session: GetSessionType;
  users: GetUsersType;
}) => {
  const user: User = session?.user;
  const route = useRouter();

  const submitHandler = async (createChannelInput: CreateChannelInputType) => {
    const createChannelData: CreateChannelType = inputToCreateChannel(createChannelInput);
    await createChannel(user?.token!, refreshMembersCreateChannel(createChannelData))
      .then(async (res) => {
        const channelCreated: GetChannelType = res.data;
        await route.push(`/channel/${channelCreated.channel.id}`);
      })
      .catch(async (err) => {
        await route.push("/channel/create")
        console.log(err);
      });
  };

  return <CreateChannel submitHandler={submitHandler} users={users.users} />;
};

export default Create;
