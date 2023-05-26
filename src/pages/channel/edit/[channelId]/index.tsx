import { addMembers, getChannelById } from "@/api/channel";
import { NavBar } from "@/components/NavBar";
import { EditChannel } from "@/components/channel/EditChannel";
import {
  addMembersToChannelInputTypeToMembersType,
} from "@/operations/channel/ChannelMapper";
import { AddMembersToChannelInputType, GetChannelType } from "@/types/Channel";
import { GetSessionType } from "@/types/Session";
import { User } from "@/types/User";
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
  return {
    props: { session, channel },
  };
}

const EditChannelPage = ({
  session,
  channel,
}: {
  session: GetSessionType;
  channel: GetChannelType;
}) => {
  const user: User = session?.user;
  const route = useRouter();
  const submitHandler = async (members: AddMembersToChannelInputType) => {
    await addMembers(
      user?.token!,
      channel.channel.id,
      addMembersToChannelInputTypeToMembersType(members)
    ).then((res) => {
      route.push(`/channel/${channel.channel.id}`);
    });
  };

  return (
    <>
      <NavBar />
      <EditChannel channel={channel.channel} submitHandler={submitHandler} />
    </>
  );
};

export default EditChannelPage;
