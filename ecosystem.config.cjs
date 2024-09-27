module.exports = {
    apps: [
        {
            name: 'nuxt-app',           // Tên ứng dụng
            exec_mode: 'fork',       // Chế độ cluster giúp tối ưu hóa việc sử dụng CPU
            instances: 1,           // Số lượng instances, 'max' để tự động chạy tối đa theo số core CPU
            script: './.output/server/index.mjs', // Đường dẫn đến file server sau khi build
            env: {
                PORT: 3301,               // Cổng mà ứng dụng sẽ chạy
                NODE_ENV: 'production'    // Chế độ môi trường
            }
        }
    ]
}