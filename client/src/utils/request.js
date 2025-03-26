const request = async (method, url, data) => {
    const options = {
        method,
        headers: data ? { "Content-Type": "application/json" } : {},
        body: data ? JSON.stringify(data) : undefined,
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Еrror! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Еrror:", error);
        throw error;
    }
};

export default {
    get: request.bind(null, "GET"),
    post: request.bind(null, "POST"),
    put: request.bind(null, "PUT"),
    delete: request.bind(null, "DELETE"),
};
