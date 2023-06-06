import { UserItemGetUsersType } from "@/types/User";
import { UserItem } from "./UserItem";

export const UserListRenderer: React.FC<{ users: UserItemGetUsersType[] }> = ({
  users,
}) => {
  return (
    <ul className="list-unstyled mb-0">
      {users.map((userItem: UserItemGetUsersType) => {
        return <UserItem key={userItem.id} userItem={userItem} />;
      })}
    </ul>
  );
};
