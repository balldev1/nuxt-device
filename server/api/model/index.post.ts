import prisma from '../../prisma';  // ตรวจสอบเส้นทางให้ถูกต้อง

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        // ตรวจสอบว่ามีข้อมูลที่จำเป็นครบถ้วนหรือไม่
        if (!body.name || !body.munufacturer || !body.softwareversion) {
            return { error: 'Please provide all required fields.' };
        }

        // ตรวจสอบว่าข้อมูลซ้ำในฐานข้อมูลหรือไม่
        const existingModel = await prisma.modeltest.findFirst({
            where: {
                name: body.name,
                munufacturer: body.munufacturer,
                softwareversion: body.softwareversion,
            },
        });

        if (existingModel) {
            return { error: 'Duplicate data found' };
        }

        // สร้างเอกสารใหม่ในฐานข้อมูล
        const newModel:any = await prisma.modeltest.create({
            data: {
                name: body.name,
                munufacturer: body.munufacturer,
                softwareversion: body.softwareversion,
            },
        });

        return newModel;
    } catch (error:any) {
        return { error: 'Error creating group', details: error.message };
    }
});
