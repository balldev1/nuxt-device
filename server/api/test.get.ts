import prisma from '../prisma';

export default defineEventHandler(async (event) => {
    const data = await prisma.parametertest.findMany();
    return data;
});