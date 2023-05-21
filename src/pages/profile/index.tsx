import { NavBar } from "@/components/NavBar";
import { DisplayProfile } from "@/components/profile/DisplayProfile";
import { GetSessionType } from "@/types/Session";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";

export const getServerSideProps = async (context: any) => {
  const session: GetSessionType = await getSession(context);
  return {
    props: {
      session: session,
    },
  };
};

const Profile = ({ session }: { session: GetSessionType }) => {
  const user: User = session?.user;

  return (
    <>
      <NavBar />
      <DisplayProfile user={user} />
    </>
  );
};

export default Profile;
