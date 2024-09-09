import prisma from '../../prisma';  // ตรวจสอบเส้นทางให้ถูกต้อง

export default defineEventHandler(async (event) => {
    try {
        // ดึงข้อมูลทั้งหมด
        const data = await prisma.grouptest.findMany();
        // กรองเอกสารที่ไม่มีฟิลด์ parentId หรือฟิลด์ parentId เป็น null
        const filteredData = data.filter(item => item.parentId === null || item.parentId === undefined);
        // ดึง _id ของเอกสารที่กรองได้
        const ids = filteredData.map(item => item.id);
        // ใช้ _id ที่ได้ไปกรองหาข้อมูลที่ _id นี้เป็น parentId ของข้อมูลไหน
        const parentIdData = await prisma.grouptest.findMany({
            where: {
                parentId: {
                    in: ids
                }
            }
        });
        // รวมข้อมูลที่กรองและข้อมูลที่เป็น parentId
        const result:any = filteredData.map(item => ({
            _id: item.id,
            name: item.name,
            parentId: parentIdData.filter(parent => parent.parentId === item.id)
        }));
        return result;
    } catch (error:any) {
        return { error: 'Error fetching data', details: error.message };
    }
});
