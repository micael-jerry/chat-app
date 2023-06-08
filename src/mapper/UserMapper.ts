import { CreateUser } from "@/types/User";
import { CreateUserInput } from "@/types/inputs/InputUser";

export const inputToCreateUser = (input: CreateUserInput): CreateUser => {
    return {
        name: input.name!,
        email: input.email!,
        bio: input.bio,
        password: input.password!
    }
}