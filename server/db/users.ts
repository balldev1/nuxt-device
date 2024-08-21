// สร้างฟันชั่นเพือไปเรียกใช้
import { prisma } from ".";
import bcrypt from "bcrypt"

export const createUser = (userData:any) => {
    const finalUserData = {
        ...userData,
        password: bcrypt.hashSync(userData.password, 10)
    }

    return prisma.user.create({
        data: finalUserData
    })
}


export const getUserByUsername = (username:any) => {
    return prisma.user.findUnique({
        where: {
            username
        }
    }as any)
}


export const getUserById = (userId:any) => {
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}