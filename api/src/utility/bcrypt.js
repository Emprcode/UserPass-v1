import bcrypt from 'bcryptjs'

const salt = 10

export const hassPass = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, salt)
}

export const comparePass = (plainPassword, hassPassword) => {
    return bcrypt.compareSync(plainPassword, hassPassword)
}