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

const Global = () => {
  return (
    <>
      <NavBar />
      <h1>Global</h1>
    </>
  );
};

export default Global;
