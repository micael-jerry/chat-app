import * as yup from "yup"

const UpdateUserSchema = yup.object({
    name: yup.string().max(50),
    currentPassword: yup.string(),
    newPassword: yup.string(),
    confirmPassword: yup.string(),
    bio: yup.string()
})

export default UpdateUserSchema;