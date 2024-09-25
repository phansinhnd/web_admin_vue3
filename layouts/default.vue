<template>
  <v-app>
    <!-- Ví dụ: Header dùng chung -->
    <Header />

    <!-- Nội dung chính của các trang sẽ được render ở đây -->
    <main class="main-admin">
      <Menu />

      <div class="main-content">
        <slot />
      </div>
    </main>

  </v-app>
</template>

<script setup>

import Header from "../components/header/Header.vue";
import Menu from "../components/Menu.vue";
</script>

<style scoped>

</style>