import prisma from "~/server/prisma";

export default defineEventHandler(async (event) => {
    try {
        // ค้นหาข้อมูลทั้งหมดจาก modeltest
        const data = await prisma.modeltest.findMany();

        // ส่งคืนข้อมูลทั้งหมด
        return data;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
