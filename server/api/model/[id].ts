import { createError, sendError } from "h3";
import prisma from "~/server/prisma";


export default defineEventHandler(async (event) => {
    try {
        const id = event.context.params?.id; // Get ID from URL parameters

        // ใช้ id model ในการเอาข้อมูลมาแสดง
        const model: any[] = await prisma.modeltest.findMany({
            where: {
                id: id,
            },
        });
      

        return model;

    } catch (error) {
        console.error("Error fetching data:", error);s
        throw error;
    }
});