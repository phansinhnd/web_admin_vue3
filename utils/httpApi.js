export const httpApi = {
    async get(url, options = {}) {
        const config = useRuntimeConfig()
        const token = useCookie('token')

        try {
            return await $fetch(config.public.apiBaseUrl + url, {
                headers: {
                    'Authorization': `Bearer ${token.value}` // Gửi token trong header
                },
                method: 'GET',
                ...options
            });
        } catch (error) {
            console.error('GET request failed:', error);
            throw error;
        }
    },

    async post(url, data, options = {}) {
        const config = useRuntimeConfig()
        const token = useCookie('token')

        try {
            return await $fetch(config.public.apiBaseUrl + url, {
                headers: {
                    'Authorization': `Bearer ${token.value}`, // Gửi token trong header
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                method: 'POST',
                body: JSON.stringify(data),
                ...options
            });
        } catch (error) {
            console.error('POST request failed:', error);
            throw error;
        }
    }
};