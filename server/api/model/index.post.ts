import prisma from '../../prisma';  // ตรวจสอบเส้นทางให้ถูกต้อง

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event); // ดึงข้อมูลที่ส่งมาจาก request body

        // ตรวจสอบว่ามีข้อมูลที่จำเป็นครบถ้วนหรือไม่
        if (!body.name) {
            return { error: 'Please provide name .' };
        }

        // สร้างเอกสารใหม่ในฐานข้อมูล
        const newModel = await prisma.modeltest.create({
            data: {
                name: body.name,
            }
        });

        return newModel;
    } catch (error) {
        return { error: 'Error creating group', details: error.message };
    }
});
