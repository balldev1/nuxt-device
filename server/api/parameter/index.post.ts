import prisma from '../../prisma';  // ตรวจสอบเส้นทางให้ถูกต้อง

export default defineEventHandler(async (event) => {
    try {

        const body = await readBody(event);

        // ตรวจสอบว่ามีข้อมูลที่จำเป็นครบถ้วนหรือไม่
        if (!body.nameParameter || !body.nameGroup || !body.nameGateway || !body.selectedGroup
            || !body.selectedManufacturer || !body.selectedModel || !body.selectedModel) {
            return { error: 'Please provide Information.' };
        }

        // ตรวจสอบว่ามี Group ที่ซ้ำอยู่แล้วในฐานข้อมูลหรือไม่
        const existingGroup = await prisma.grouptest.findFirst({
            where: {
                name: body.nameGroup,
                parentId: body.selectedGroup._id,
            },
        });

        if (existingGroup) {
            return { error: 'Group already exists' }; // แจ้งว่าข้อมูลซ้ำ
        }

        // สร้าง grouptest
        const newGroup:any = await prisma.grouptest.create({
            data: {
                name: body.nameGroup,
                parentId: body.selectedGroup._id,
            },
        });

        // ตรวจสอบว่ามี gateway ที่ซ้ำอยู่แล้วในฐานข้อมูลหรือไม่
        const existingGateway = await prisma.gateway.findFirst({
            where: {
                name: body.nameGateway,
            },
        });

        if (existingGateway) {
            return { error: 'Gateway already exists' }; // แจ้งว่าข้อมูลซ้ำ
        }

        // สร้าง gateway
        const newGateway:any = await prisma.gateway.create({
            data: {
                name: body.nameGateway,
            },
        });

        // ตรวจสอบว่ามี modeltest ที่ซ้ำอยู่แล้วในฐานข้อมูลหรือไม่
        const existingModeltest = await prisma.modeltest.findFirst({
            where: {
                name: body.selectedModel,
                munufacturer: body.selectedManufacturer,
                softwareversion: body.selectedSoftwareversion,
            },
        });

        if (existingModeltest) {
            return { error: 'Modeltest already exists' }; // แจ้งว่าข้อมูลซ้ำ
        }

        // สร้าง modelteest
        const newModel:any = await prisma.modeltest.create({
            data: {
                name: body.selectedModel,
                munufacturer: body.selectedManufacturer,
                softwareversion: body.selectedSoftwareversion,
            },
        });

        // ตรวจสอบว่ามี parametertest ที่ซ้ำอยู่แล้วในฐานข้อมูลหรือไม่
        const existingParametertest = await prisma.parametertest.findFirst({
            where: {
                name: body.nameParameter,
                model: newModel.id,
                gateway: newGateway.id,
                group: newGroup.id,
            },
        });

        if (existingParametertest) {
            return { error: 'Parametertest already exists' }; // แจ้งว่าข้อมูลซ้ำ
        }

        // สร้าง parametertest
        const newParameter:any = await prisma.parametertest.create({
            data: {
                name: body.nameParameter,
                model: newModel.id,
                gateway: newGateway.id,
                group: newGroup.id,
            },
        });

        return newParameter;
    } catch (error:any) {
        return { error: 'Error creating group', details: error.message };
    }
});
