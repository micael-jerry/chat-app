import { getChannels } from "@/api/channel";
import { NavBar } from "@/components/NavBar";
import { GetSessionType } from "@/types/Session";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";
import React from "react";

export async function getServerSideProps(context: any) {
  const session: GetSessionType = await getSession(context);
  const user: User = session?.user;
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  let channels = await getChannels(user?.token!);
  return {
    props: { session, channels },
  };
}

const Channel = ({
  session,
  channels,
}: {
  session: GetSessionType;
  channels: any;
}) => {
  console.log(channels);
  return (
    <>
      <NavBar />
      <h1>Channel</h1>
    </>
  );
};

export default Channel;
