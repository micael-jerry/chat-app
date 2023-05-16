import { useSession } from "next-auth/react";

const Profile = () => {
  const { data } = useSession();
  const userSession = data?.user;
  return (
    <div>
      <p>{JSON.stringify(userSession)}</p>
    </div>
  );
};

export default Profile;
