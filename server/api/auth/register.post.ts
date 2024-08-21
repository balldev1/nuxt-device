import { sendError,readBody } from "h3"
import {createUser} from "~/server/db/users";
import {userTransformer} from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { email, password, repeatPassword, name } = body

    if ( !email || !password || !repeatPassword || !name) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid params' }))
    }

    if (password !== repeatPassword) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Passwords do not match' }))
    }

    const userData = {
        name,
        email,
        password,
    }

    const user = await createUser(userData)

    return  userTransformer(user)
})

// sendError และ readBody มาจาก h3 ซึ่งเป็น HTTP framework ที่ใช้ใน Nuxt 3.
// createUser นำเข้ามาจากไฟล์ users ในโฟลเดอร์ db ซึ่งใช้สำหรับสร้างผู้ใช้ในฐานข้อมูล.
// userTransformer นำเข้ามาจากไฟล์ transformers/user ใช้สำหรับแปลงข้อมูลผู้ใช้ก่อนส่งกลับไปยัง client.