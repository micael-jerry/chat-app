export type CreateUser = {
  name: string;
  email: string;
  bio: string | null;
  password: string;
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
