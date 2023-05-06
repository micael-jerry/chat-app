import { Storage } from "@/storage";
import { User, UserLogin } from "../type/types"

export const login = (login: UserLogin): User => {
    const user = getUserByEmailToLocalStorage(login.email);
    if (user?.password == login.password) {
        return user;
    }
    throw new Error('No authorized')
}

export const register = (register: User): User => {
    return addUserToLocalStorage(register);
}

export const addUserToLocalStorage = (user: User): User => {
    if (getUserByEmailToLocalStorage(user.email) === null) {
        setItem(user.email, JSON.stringify(user))
        return user;
    }
    throw new Error(`There is already an account attached to the email ${user.email}`);
}

export const getUserByEmailToLocalStorage = (email: string): User | null => {
    const user: string | null = getItem(email)
    return (user != null) ? JSON.parse(user) : null;
}

const setItem = (key: string, value: string): void => {
    Storage.initialize()
    Storage.setItem(key, value)
}

const getItem = (item: string): string | null => {
    Storage.initialize()
    return Storage.getItem(item);
}
