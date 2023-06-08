import { CreateUser, UserLogin } from "@/types/User";
import { CreateUserInput, UserLoginInput } from "@/types/inputs/InputUser";

export const inputToCreateUser = (input: CreateUserInput): CreateUser => {
    return {
        name: input.name!,
        email: input.email!,
        bio: input.bio,
        password: input.password!
    }
}

export const inputToUserLogin = (input: UserLoginInput): UserLogin => {
    return {
        email: input.email!,
        password: input.password!
    }
}