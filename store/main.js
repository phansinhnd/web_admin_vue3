import { createApp } from 'vue'
// import Notifications from 'vue-notification'
import Toast, { PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from './App.vue'

const app = createApp(App)

// Sử dụng Notifications plugin
app.use(Toast, options);

app.mount('#app')
