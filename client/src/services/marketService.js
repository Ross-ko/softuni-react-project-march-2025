import request from "../utils/request.js";

const baseUrl = "http://localhost:3030/jsonstore/market";

export default {
    async create(adData) {
        return await request.post(baseUrl, adData);
    },
    async getAll() {
        const result = await request.get(baseUrl);

        return result ? Object.values(result) : [];
    },
    getOne(itemId) {
        return request.get(`${baseUrl}/${itemId}`);
    },
    edit(itemId, adData) {
        return request.put(`${baseUrl}/${itemId}`, { ...adData, _id: itemId });
    },
    delete(itemId) {
        return request.delete(`${baseUrl}/${itemId}`);
    },
};
