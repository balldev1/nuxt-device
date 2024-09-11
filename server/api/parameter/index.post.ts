import prisma from '../../prisma';  // ตรวจสอบเส้นทางให้ถูกต้อง

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        // ตรวจสอบว่ามีข้อมูลที่จำเป็นครบถ้วนหรือไม่
        if (!body.nameParameter || !body.nameGroup || !body.nameGateway || !body.selectedGroup
            || !body.selectedManufacturer || !body.selectedModel || !body.selectedSoftwareversion) {
            return { error: 'Please provide all required information.' };
        }

        let parentGroupId;

        // ตรวจสอบว่า selectedGroup มี _id หรือไม่
        if (body.selectedGroup && body.selectedGroup._id) {
            parentGroupId = body.selectedGroup._id;
        } else if (body.selectedGroup) {
            // สร้าง Group ใหม่หากไม่มี _id
            const newParentGroup = await prisma.grouptest.create({
                data: {
                    name: body.selectedGroup,
                },
            });

            // เก็บ id ของ Group ที่สร้างใหม่
            parentGroupId = newParentGroup.id;
        } else {
            return { error: 'Invalid selectedGroup data.' }; // หาก selectedGroup ไม่มีข้อมูลที่ถูกต้อง
        }

        // ตรวจสอบข้อมูลทั้งหมดก่อนสร้าง
        const [existingGroup, existingGateway, existingParametertest] = await Promise.all([
            prisma.grouptest.findFirst({
                where: {
                    name: body.nameGroup,
                    parentId: parentGroupId,
                },
            }),
            prisma.gateway.findFirst({
                where: {
                    name: body.nameGateway,
                },
            }),
            prisma.parametertest.findFirst({
                where: {
                    name: body.nameParameter,
                    model: body.selectedModel.id, // Update as necessary
                    gateway: body.nameGateway.id, // Update as necessary
                    group: body.nameGroup.id, // Update as necessary
                },
            }),
        ]);

        // ตรวจสอบว่ามีข้อมูลซ้ำอยู่หรือไม่
        if (existingGroup) {
            return { error: 'Group already exists' };
        }

        if (existingGateway) {
            return { error: 'Gateway already exists' };
        }

        if (existingParametertest) {
            return { error: 'Parametertest already exists' };
        }

        // สร้าง Group ใหม่โดยใช้ parentId ที่ได้จากขั้นตอนข้างต้น
        const newGroup:any = await prisma.grouptest.create({
            data: {
                name: body.nameGroup,
                parentId: parentGroupId,
            },
        });

        const newGateway:any = await prisma.gateway.create({
            data: {
                name: body.nameGateway,
            },
        });

        // สร้าง modeltest
        const newModel:any = await prisma.modeltest.create({
            data: {
                name: body.selectedModel,
                munufacturer: body.selectedManufacturer,
                softwareversion: body.selectedSoftwareversion,
            },
        });

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

    } catch (error) {
        console.error('Error creating group:', error);
        return { error: 'Error creating group', details: error.message };
    }
});