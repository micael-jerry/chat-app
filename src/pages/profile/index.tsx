import { getUserLoged, putUser } from "@/api/user";
import { NavBar } from "@/components/NavBar";
import { DisplayProfile } from "@/components/profile/DisplayProfile";
import { inputToUpdateUser } from "@/mapper/UserMapper";
import { GetSessionType } from "@/types/Session";
import { GetUserType, User } from "@/types/User";
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
  const userSession: User = session.user;
  const user: GetUserType = await getUserLoged(userSession?.token!);
  return {
    props: {
      userLoged: user.user
    },
  };
};

const Profile = ({ userLoged }: { userLoged: User }) => {

  const submitHandler = async (updateUserInput: UpdateUserInput) => {
    await putUser(userLoged?.token!,inputToUpdateUser(updateUserInput))
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
      <DisplayProfile user={userLoged} submitHandler={submitHandler} />
    </>
  );
};

export default Profile;
