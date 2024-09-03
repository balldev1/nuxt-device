import {defineEventHandler, sendError, createError} from 'h3';
import axios from 'axios';

interface Device {
    _id: string;
    InternetGatewayDevice: {
        DeviceInfo: {
            HardwareVersion: {
                _object: boolean;
                _timestamp: string;
                _type: string;
                _value: string;
                _writable: boolean;
            };
        };
    };
}

export default defineEventHandler(async (event) => {
    try {
        // ดึง `id` จาก URL parameter
        const id = event.context.params?.id;

        if (!id) {
            return sendError(event, createError({statusCode: 400, statusMessage: 'ID parameter is missing.'}));
        }

        // ดึงข้อมูลทั้งหมดจาก API
        const response = await axios.get<Device[]>(`${process.env.API_URL}/devices/`);
        const data = response.data;

        // กรองข้อมูลที่มี _id ตรงกับ ID ที่ต้องการ
        const filteredData = data.find(item => item._id === id);

        // ตรวจสอบว่ามีข้อมูลหรือไม่
        if (filteredData) {
            return filteredData;
        } else {
            return sendError(event, createError({statusCode: 404, statusMessage: 'Data Not Found'}));
        }

    } catch (error) {
        // กรณีเกิดข้อผิดพลาด ส่ง error response
        return sendError(event, createError({statusCode: 500, statusMessage: 'Server Something Went Wrong.'}));
    }
});
