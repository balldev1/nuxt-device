import prisma from '../../prisma';  // ตรวจสอบเส้นทางให้ถูกต้อง

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        // ตรวจสอบว่ามีข้อมูลที่จำเป็นครบถ้วนหรือไม่
        if (!body.name || !body.parentId) {
            return { error: 'Please provide both name and parentId.' };
        }

        // ตรวจสอบว่ามี Group ที่ซ้ำอยู่แล้วในฐานข้อมูลหรือไม่
        const existingGroup = await prisma.grouptest.findFirst({
            where: {
                name: body.name,
                parentId: body.parentId,
            },
        });

        if (existingGroup) {
            return { error: 'Group already exists' }; // แจ้งว่าข้อมูลซ้ำ
        }

        // สร้าง grouptest
        const newGroup = await prisma.grouptest.create({
            data: {
                name: body.name,
                parentId: body.parentId,
            },
        });

        const newGateway = await prisma.gateway.create({
            data: {
                name: body.name,
            },
        });

        // สร้าง parametertest
        const newParameter = await prisma.parametertest.create({
            data: {
                name: body.nameParameter,
                model: body.model,
                gateway: newGateway.id,
                group: newGroup.id,
            },
        });

        return newParameter;
    } catch (error:any) {
        return { error: 'Error creating group', details: error.message };
    }
});
