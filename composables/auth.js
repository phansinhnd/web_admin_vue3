import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore',{
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    checkIsLoggedIn() {
      const token = useCookie('token')
      this.isLoggedIn = !!token.value
    },

    async login(email, password) {
      // console.log(email, password)
      try {
        const response = await httpApi.get('/users', {email, password});
        // console.log(response)

        // Lưu token vào cookie

        // Chuyển hướng tới dashboard sau khi đăng nhập thành công
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
});