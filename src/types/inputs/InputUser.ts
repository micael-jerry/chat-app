export type CreateUserInput = {
  name?: string;
  email?: string;
  bio?: string | null;
  password?: string;
};

export type UserLoginInput = {
  email?: string;
  password?: string;
};
