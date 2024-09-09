import { createError, sendError } from "h3";
import prisma from "~/server/prisma";

// Define types for the data structures used

interface GroupData {
    id: string;
    name: string | null;
    parentId: string | null;
}

interface Result {
    [key: string]: {
        [key: string]: {
            id: string;
            name: string;
            model: string;
            gateway: string | null;
            group: string | null;
            groupParams: any | null;
        };
    };
}

export default defineEventHandler(async (event) => {
    try {
        const id = event.context.params?.id; // Get ID from URL parameters

        if (!id) {
            return sendError(
                event,
                createError({ statusCode: 400, statusMessage: "ID parameter is missing." })
            );
        }

        // ใช้ id model ในการเอาข้อมูลมาแสดง
        const parameterData: any[] = await prisma.parametertest.findMany({
            where: {
                model: id,
            },
        });

        if (parameterData.length === 0) {
            return sendError(
                event,
                createError({
                    statusCode: 404,
                    statusMessage: "No data found in parametertest.",
                })
            );
        }

        // ดึงค่า id group จาก parameterData กรองที่ไม่ null
        const groupIds = parameterData
            .map((param) => param.group)
            .filter((groupId): groupId is string => groupId !== null);

        // เข้าไปที่ grouptest หาข้อมูลที่มี id ที่ === groupIds
        const groupData: GroupData[] = await prisma.grouptest.findMany({
            where: {
                id: {
                    in: groupIds,
                },
            },
        });

        // ข้อมูล grouptest กรอง parentId ที่ไม่เป็น null มา
        const parentIds = groupData
            .map((group) => group.parentId)
            .filter((parentId): parentId is string => parentId !== null);

        // เข้าไปที่ grouptest หาข้อมูลทีมี id ตรงกับ parentIds
        const parentGroupData: GroupData[] = await prisma.grouptest.findMany({
            where: {
                id: {
                    in: parentIds,
                },
            },
        });

        // สร้าง array[] group  จับคู่ id : group
        const groupDataMap = new Map(groupData.map((group) => [group.id, group]));
        const parentGroupDataMap = new Map(parentGroupData.map((group) => [group.id, group]));

        // เอาข้อมูลจาก prisma.parameter.model ตอนแรกมาใช้ เพือเอา เลข id จาก parameter.model
        const modelIds = parameterData
            .map((param) => param.model)
            .filter((modelId): modelId is string => modelId !== null);

        // เข้าไปที่ modeltest เพือเอาข้อมูลที่มี id ตรงกับ modelIds
        const modelData = await prisma.modeltest.findMany({
            where: {
                id: {
                    in: modelIds,
                },
            },
        });

        // สร้าง array[] model id:name
        const modelDataMap = new Map(modelData.map((model) => [model.id, model.name]));

        // เอาข้อมูลจาก prisma.parameter.gateway ตอนแรกมาใช้ เพือเอา เลข id จาก parameter.gateway
        const gatewayIds = parameterData
            .map((param) => param.gateway)
            .filter((gatewayId): gatewayId is string => gatewayId !== null);

        // เข้าไปที่ gateway เพือเอาข้อมูลที่มี id ตรงกับ gatewayIds
        const gatewayData = await prisma.gateway.findMany({
            where: {
                id: {
                    in: gatewayIds,
                },
            },
        });

        // สร้าง array[] gateway id:name
        const gatewayDataMap = new Map(gatewayData.map((gateway) => [gateway.id, gateway.name]));

        // เอาข้อมูลจาก prisma.parameter.grouptest ตอนแรกมาใช้ เพือเอา เลข id จาก parameter.grouptest
        const grouptestIds = parameterData
            .map((param) => param.group)
            .filter((groupId): groupId is string => groupId !== null);

        // เข้าไปที่ gruoptest เพือเอาข้อมูลที่มี id ตรงกับ gruoptest
        const grouptestData = await prisma.grouptest.findMany({
            where: {
                id: {
                    in: grouptestIds,
                },
            },
        });

        // สร้าง array[] gruop id:name
        const grouptestDataMap = new Map(grouptestData.map((group) => [group.id, group.name]));

        // Initialize the result object
        const result: Result = {};

        // เอาข้อมูลที่ได้จาก groupDataMap รับข้อมูลโดยใช้ params.group ในการหาข้อมูล
        // if group
        // if parentGroup ใช้ parentId สร้าง {} || ! {} ว่าง
        // add ข้อมูล
        parameterData.forEach((param) => {
            const group = groupDataMap.get(param.group as string);
            if (group) {
                const parentGroup = parentGroupDataMap.get(group.parentId as string);

                // Ensure parent group exists
                if (parentGroup) {
                    // Use a fallback value when parentGroup.name is null
                    const parentGroupName = parentGroup.name ?? "Unknown Parent Group"; // Fallback to a default value if null

                    if (!result[parentGroupName]) {
                        result[parentGroupName] = {};
                    }

                    // Add the parameter to the appropriate parent group, including model name and group parameters
                    result[parentGroupName][param.name] = {
                        id: param.id,
                        name: param.name,
                        model: modelDataMap.get(param.model as string) || "Unknown Model",
                        gateway: gatewayDataMap.get(param.gateway as string) || "Unknown Gateway",
                        group: grouptestDataMap.get(param.group as string) || "Unknown Group",
                        groupParams: grouptestDataMap.get(param.group as string) || "Unknown Params",
                    };
                }
            }
        });

        // สร้าง object.key โดยใช้ parentname , groupname
        const finalResult: any = {};

        Object.keys(result).forEach((parentName) => {
            finalResult[parentName] = {};

            Object.values(result[parentName]).forEach((param) => {
                // Use groupParams or group as the group name
                const groupName = param.groupParams || param.group || "Unknown Group";

                if (!finalResult[parentName][groupName]) {
                    finalResult[parentName][groupName] = {};
                }

                finalResult[parentName][groupName][param.name] = param;
            });
        });

        return finalResult;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
