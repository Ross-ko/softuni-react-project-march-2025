import request from "../utils/request.js";

const baseUrl = "http://localhost:3030/jsonstore/workouts";

export default {
    async create(workoutData) {
        return await request.post(baseUrl, workoutData);
    },
    async getAll() {
        const result = await request.get(baseUrl);

        return result ? Object.values(result) : [];
    },
    getOne(workoutId) {
        return request.get(`${baseUrl}/${workoutId}`);
    },
    edit(workoutId, workoutData) {
        return request.put(`${baseUrl}/${workoutId}`, { ...workoutData, _id: workoutId });
    },
    delete(workoutId) {
        return request.delete(`${baseUrl}/${workoutId}`);
    },
};