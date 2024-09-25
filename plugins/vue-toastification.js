import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin(nuxtApp => {
    const options = {
        // Các tùy chọn bạn muốn thêm
    };
    nuxtApp.vueApp.use(Toast, options);
});
