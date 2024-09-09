import prisma from "~/server/prisma";
import { createError, sendError } from "h3";

export default defineEventHandler(async (event :any) => {
    try {
        // รับ path parameters จาก URL
        const { name, id } = event.context.params;

        // ใช้ Prisma เพื่อดึงข้อมูลจาก parametertest
        const parameterData = await prisma.parametertest.findFirst({
            where: {
                name: name,
                model: id,
            },
        });

        if (!parameterData) {
            return sendError(event, createError({ statusCode: 404, statusMessage: 'No data found in parametertest.' }));
        }

        // ดึงค่า groupId จากผลลัพธ์ parametertest
        const modelId = parameterData.model;
        const gatewayId = parameterData.gateway;
        const groupId = parameterData.group;

        // ค้นหาข้อมูลใน modeltest โดยใช้ค่า modelId
        const modelData = await prisma.modeltest.findUnique({
            where: {
                id: modelId as any,
            },
        });

        // ค้นหาข้อมูลใน gateway โดยใช้ค่า gatewayId
        const gatewayData = await prisma.gateway.findUnique({
            where: {
                id: gatewayId as any,
            },
        });

        // ค้นหาข้อมูลใน grouptest โดยใช้ค่า groupId
        const groupData = await prisma.grouptest.findUnique({
            where: {
                id: groupId as any,
            },
        });

        if (!modelData || !gatewayData || !groupData) {
            return sendError(event, createError({ statusCode: 404, statusMessage: 'Group data not found.' }));
        }

        // ดึง parentId จากข้อมูลที่ได้
        const parentId = groupData.parentId;

        let parentData:any = null;
        if (parentId) {
            // ค้นหาข้อมูลใน grouptest อีกครั้ง โดยใช้ parentId
            parentData = await prisma.grouptest.findUnique({
                where: {
                    id: parentId,
                },
            });

            if (!parentData) {
                return sendError(event, createError({ statusCode: 404, statusMessage: 'Parent data not found.' }));
            }
        }

        // สร้างข้อมูลใหม่ที่รวมข้อมูลจาก groupData และ parentData
        const updatedParameterData:any = {
            ...parameterData,
            model: modelData.name,
            gateway: gatewayData.name,
            group: groupData.name,
            parent_group: parentData ? parentData.name : null,
        };

        return updatedParameterData;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});

