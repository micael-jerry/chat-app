import { putUser } from "@/api/user";
import { NavBar } from "@/components/NavBar";
import { DisplayProfile } from "@/components/profile/DisplayProfile";
import { inputToUpdateUser } from "@/mapper/UserMapper";
import { GetSessionType } from "@/types/Session";
import { User } from "@/types/User";
import { UpdateUserInput } from "@/types/inputs/InputUser";
import { getSession } from "next-auth/react";

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

const Profile = ({ session }: { session: GetSessionType }) => {
  const user: User = session?.user;

  const submitHandler = async (updateUserInput: UpdateUserInput) => {
    await putUser(user?.token!,inputToUpdateUser(updateUserInput))
    .then(() => {
      window.location.reload()
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <NavBar />
      <DisplayProfile user={user} submitHandler={submitHandler} />
    </>
  );
};

export default Profile;
