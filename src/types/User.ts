export type CreateUser = {
  name: string;
  email: string;
  bio?: string | null;
  password: string;
};

export type UpdateUser = {
  name?: string;
  oldPassword?: string;
  password?: string;
  bio?: string;
};

export type User =
  | {
      id?: number;
      email?: string | null;
      name?: string | null;
      googleId?: string | null;
      bio?: string | null;
      status?: number;
      createdAt?: string | null;
      updatedAt?: string | null;
      deletedAt?: string | null;
      token?: string;
    }
  | undefined;

export type UserLogin = {
  email: string;
  password: string;
};

export type LogResponse = {
  status: boolean;
  user: User;
};

export type GetUsersType = {
  status: boolean;
  users: UserItemGetUsersType[];
};

export type GetUserType = {
  status: boolean;
  user: User;
};

export type UserItemGetUsersType = {
  id: number;
  name: string;
  email: string;
  bio: string | null;
};

export type UserSelectOptionType = {
  value: number;
  label: string;
};
