const baseUrl = "http://localhost:3030/jsonstore/market";

export default {
    async create(adData) {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adData),
        });

        const result = await response.json();

        return result;
    },
};
