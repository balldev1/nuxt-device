import { createError, sendError } from "h3";
import prisma from "~/server/prisma";

export default defineEventHandler(async (event) => {
    try {
        const id = event.context.params?.id; // Get ID from URL parameters

        if (!id) {
            return sendError(event, createError({ statusCode: 400, statusMessage: 'ID parameter is missing.' }));
        }

        // Fetch data from parametertest using ID
        const parameterData = await prisma.parametertest.findMany({
            where: {
                model: id,
            },
        });

        if (parameterData.length === 0) {
            return sendError(event, createError({ statusCode: 404, statusMessage: 'No data found in parametertest.' }));
        }

        // Extract group IDs from parameterData
        const groupIds = parameterData
            .map(param => param.group)
            .filter(groupId => groupId !== null);

        // Fetch group data using the groupIds
        const groupData = await prisma.grouptest.findMany({
            where: {
                id: {
                    in: groupIds,
                },
            },
        });

        // Extract parent IDs from the fetched groupData
        const parentIds = groupData
            .map(group => group.parentId)
            .filter(parentId => parentId !== null);

        // Fetch parent group data using the parentIds
        const parentGroupData = await prisma.grouptest.findMany({
            where: {
                id: {
                    in: parentIds,
                },
            },
        });

        // Create lookup maps for group data and parent group data
        const groupDataMap = new Map(groupData.map(group => [group.id, group]));
        const parentGroupDataMap = new Map(parentGroupData.map(group => [group.id, group]));

        // Extract model IDs from parameterData
        const modelIds = parameterData
            .map(param => param.model)
            .filter(modelId => modelId !== null);

        // Fetch model data using the modelIds
        const modelData = await prisma.modeltest.findMany({
            where: {
                id: {
                    in: modelIds,
                },
            },
        });

        // now wait 

        // Create a lookup map for model names
        const modelDataMap = new Map(modelData.map(model => [model.id, model.name]));
        const gatewayDataMap = new Map(modelData.map(model => [model.id, model.name]));
        const groupDataMap = new Map(modelData.map(model => [model.id, model.name]));



        // Initialize the result object
        const result = {};

        // Organize data by group
        parameterData.forEach(param => {
            const group = groupDataMap.get(param.group);
            if (group) {
                const parentGroup = parentGroupDataMap.get(group.parentId);

                // Ensure parent group exists
                if (parentGroup) {
                    // Check if the result object already has the parent group's key
                    if (!result[parentGroup.name]) {
                        result[parentGroup.name] = {};
                    }

                    // Add the parameter to the appropriate parent group, including model name
                    result[parentGroup.name][param.name] = {
                        id: param.id,
                        name: param.name,
                        model: modelDataMap.get(param.model) || "Unknown Model", // Fetch model name
                        gateway: param.gateway,
                        group: param.group,
                    };
                }
            }
        });

        // Rearrange data to separate groups under their parent group
        const finalResult = {};

        Object.keys(result).forEach(parentName => {
            finalResult[parentName] = {};

            Object.values(result[parentName]).forEach(param => {
                const groupName = groupDataMap.get(param.group)?.name || "Unknown Group";

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
