import { CreateUser, UpdateUser, UserLogin } from "@/types/User";
import { CreateUserInput, UpdateUserInput, UserLoginInput } from "@/types/inputs/InputUser";

export const inputToCreateUser = (input: CreateUserInput): CreateUser => {
  return {
    name: input.name!,
    email: input.email!,
    bio: input.bio,
    password: input.password!,
  };
};

export const inputToUserLogin = (input: UserLoginInput): UserLogin => {
  return {
    email: input.email!,
    password: input.password!,
  };
};

export const inputToUpdateUser = (input: UpdateUserInput): UpdateUser => {
  if (input.name === "") {
    input.name = undefined
  }
  if (input.currentPassword === "") {
    input.currentPassword = undefined
  }
  if (input.newPassword === "") {
    input.newPassword = undefined
  }
  if (input.bio === "") {
    input.bio = undefined
  }

  return {
    name: input.name,
    oldPassword: input.currentPassword,
    password: input.newPassword,
    bio: input.bio
  }
}