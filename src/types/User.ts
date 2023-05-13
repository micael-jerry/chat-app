export type User = {
    "id": number,
    "email": string,
    "name": string,
    "googleId": string | null,
    "bio": string | null,
    "status": number,
    "createdAt": string | null,
    "updatedAt": string | null,
    "deletedAt": string | null,
    "token": string
}

export type LogResponse = {
    "status": boolean,
    "user": User
}
