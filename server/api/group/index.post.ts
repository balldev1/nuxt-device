import prisma from '../../prisma';  // ตรวจสอบเส้นทางให้ถูกต้อง

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event); // ดึงข้อมูลที่ส่งมาจาก request body

        // ตรวจสอบว่ามีข้อมูลที่จำเป็นครบถ้วนหรือไม่
        if (!body.name || !body.parentId) {
            return { error: 'Please provide both name and childern.' };
        }

        // สร้างเอกสารใหม่ในฐานข้อมูล
        const newGroup = await prisma.grouptest.create({
            data: {
                name: body.name,
                parentId: body.parentId
            }
        });

        return newGroup;
    } catch (error) {
        return { error: 'Error creating group', details: error.message };
    }
});
