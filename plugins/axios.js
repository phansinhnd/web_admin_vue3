import axios from 'axios';
import Cookies from 'js-cookie';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    // Tạo một instance của axios
    const axiosInstance = axios.create({
        baseURL: config.public.apiBaseUrl, // Lấy từ runtime config
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Interceptors cho request để thêm token từ cookie
    axiosInstance.interceptors.request.use((config) => {
        // Lấy token từ cookie
        const token = Cookies.get('token');

        if (token) {
            // Thêm token vào headers Authorization nếu tồn tại
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    // Interceptor để xử lý lỗi response
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401) {
                // Chuyển hướng tới trang đăng nhập nếu token không hợp lệ hoặc hết hạn
                nuxtApp.$router.push('/login123');
            }
            return Promise.reject(error);
        }
    );

    return {
        provide: {
            axios: axiosInstance,
        },
    };
});