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

export type UpdateUserInput = {
  name?: string;
  currentPassword?: string;
  newPassword?: string;
  bio?: string;
};
