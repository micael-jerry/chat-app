import { addMembers, getChannelById } from "@/api/channel";
import { getUsers } from "@/api/user";
import { NavBar } from "@/components/NavBar";
import { EditChannel } from "@/components/channel/EditChannel";
import { inputToAddMembersChannelType } from "@/mapper/ChannelMapper";
import { GetChannelType } from "@/types/Channel";
import { GetSessionType } from "@/types/Session";
import { GetUsersType, User } from "@/types/User";
import { AddMembersToChannelInputType } from "@/types/inputs/InputChannel";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context: any) {
  const regexChannelId = /^\d+$/;
  const session: GetSessionType = await getSession(context);
  const user: User = session?.user;

  const channelId: string = context.query.channelId;
  if (!session || !regexChannelId.test(channelId)) {
    return {
      redirect: {
        destination: "/channel",
        permanent: false,
      },
    };
  }
  let channel = await getChannelById(user?.token!, Number(channelId));
  let users = await getUsers(user?.token!);
  return {
    props: { session, channel, users },
  };
}

const EditChannelPage = ({
  session,
  channel,
  users,
}: {
  session: GetSessionType;
  channel: GetChannelType;
  users: GetUsersType;
}) => {
  const user: User = session?.user;
  const route = useRouter();

  const submitHandler = async (addMembersToChannelInput: AddMembersToChannelInputType) => {
    await addMembers(user?.token!, channel.channel.id, inputToAddMembersChannelType(addMembersToChannelInput))
      .then(async () => {
        await route.push(`/channel/${channel.channel.id}`);
      });
  };

  return (
    <>
      <NavBar />
      <EditChannel
        channel={channel.channel}
        submitHandler={submitHandler}
        users={users.users}
      />
    </>
  );
};

export default EditChannelPage;
