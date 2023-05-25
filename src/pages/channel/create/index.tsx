import { createChannel } from "@/api/channel";
import { CreateChannel } from "@/components/channel/CreateChannel";
import { createChannelInputTypeToCreateChannelType } from "@/operations/channel/createChannelMapper";
import { CreateChannelInputType } from "@/types/Channel";
import { GetSessionType } from "@/types/Session";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export const getServerSideProps = async (context: any) => {
  const session: GetSessionType = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session: session,
    },
  };
};

export const Create = ({ session }: { session: GetSessionType }) => {
  const user: User = session?.user;
  const route = useRouter();

  const submitHandler = async (channel: CreateChannelInputType) => {
    console.log(channel);

    await createChannel(
      user?.token!,
      createChannelInputTypeToCreateChannelType(channel)
    ).then((res) => {
      route.push("/channel");
    });
  };

  return <CreateChannel submitHandler={submitHandler} />;
};

export default Create;
