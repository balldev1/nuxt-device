import { defineEventHandler, sendError, createError } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
    try {

        const response = await axios.get(`${process.env.API_URL}/devices/`);

        return response.data;

    } catch (error) {
        // กรณีเกิดข้อผิดพลาด ส่ง error response
        return sendError(event, createError({ statusCode: 500, statusMessage: 'Server Something Went Wrong.' }));
    }
});
