import { UserItemGetUsersType, UserSelectOptionType } from "@/types/User";

export const selectOptionUsers = (
  users: UserItemGetUsersType[]
): UserSelectOptionType[] => {
  return users.map((user: UserItemGetUsersType): UserSelectOptionType => {
    return { value: user.id, label: `${user.id} - ${user.name}` };
  });
};
