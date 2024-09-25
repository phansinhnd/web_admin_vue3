import { useAuthStore } from '~/composables/auth'
//
export default defineNuxtRouteMiddleware(async (to, from) => {
//   const authStore = useAuthStore(); // Assuming this checks the login status
//   authStore.checkIsLoggedIn()
//
//   // If the user is already logged in, avoid redirecting them to login
//   if (authStore.isLoggedIn && to.path === '/dang-nhap') {
//     // If the user is logged in and tries to access the login page, redirect to the dashboard
//     return navigateTo('/dashboard');
//   }
//
//   // If the user is not logged in and is not trying to access the login page, redirect them
//   if (!authStore.isLoggedIn && to.path !== '/dang-nhap') {
//     return navigateTo('/dang-nhap');
//   }
});
