import { NavBar } from "@/components/NavBar";
import { getSession } from "next-auth/react";
import React from "react";

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: { session }
  }
}

const Channel = () => {
  return (
    <>
      <NavBar />
      <h1>Channel</h1>
    </>
  );
};

export default Channel;
