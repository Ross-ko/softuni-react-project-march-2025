import request from "../utils/request.js";

const baseUrl = "http://localhost:3030/jsonstore/market";

export default {
    create(adData) {
        return request.post(baseUrl, adData);
    },
    async getAll() {
        const result = await request.get(baseUrl);

        const advertisements = Object.values(result);

        return advertisements;
    },
};
