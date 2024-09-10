import prisma from '../../prisma';  // ตรวจสอบเส้นทางให้ถูกต้อง

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event); // ดึงข้อมูลที่ส่งมาจาก request body

        // ตรวจสอบว่ามีข้อมูลที่จำเป็นครบถ้วนหรือไม่
        if (!body.name || !body.munufacturer || !body.softwareversion) {
            return { error: 'Please provide name .' };
        }

        // สร้างเอกสารใหม่ในฐานข้อมูล
        const newModel:any = await prisma.modeltest.create({
            data: {
                name: body.name,
                munufacturer: body.munufacturer,
                softwareversion: body.softwareversion,
            }
        });

        return newModel;
    } catch (error:any) {
        return { error: 'Error creating group', details: error.message };
    }
});
