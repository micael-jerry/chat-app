import { createChannel } from "@/api/channel";
import { getUsers } from "@/api/user";
import { CreateChannel } from "@/components/channel/CreateChannel";
import { createChannelMapper } from "@/operations/channel/ChannelMapper";
import { CreateChannelType, GetChannelType } from "@/types/Channel";
import { GetSessionType } from "@/types/Session";
import { GetUsersType, User } from "@/types/User";
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

  const submitHandler = async (channel: CreateChannelType) => {
    await createChannel(user?.token!, createChannelMapper(channel))
      .then((res) => {
        const channelCreated: GetChannelType = res.data;
        route.push(`/channel/${channelCreated.channel.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <CreateChannel submitHandler={submitHandler} users={users.users} />;
};

export default Create;
