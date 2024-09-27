<template>
  <div class="main-menu">
    <v-list class="pa-0" >
      <v-list-item
              active-class="style-active-menu-small"
              v-for="([title, iconClass, route], i) in admins"
              :key="i"
              :to="route"
              router
              :title="title"
              :value="title"
      >
        <template #prepend>
          <i :class="iconClass"></i>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    open: ['Users'],
    admins: [
      ['Master data', 'icon-Box', '/master-data'],
      ['Dashboard', 'icon-Menu', '/dashboard'],
      ['Hòm thư', 'icon-Messages', 'messages'],
      ['Cơ sở lưu trú', 'icon-Hotel', '/accommodation'],
      ['Nhà hàng, dịch vụ khác', 'icon-Outline-Shop'],
      ['Điểm đến du lịch', 'icon-Outline-Location'],
      ['Cơ sở mua sắm', 'icon-Outline-Buy'],
      ['Doanh nghiệp vận chuyển', 'icon-delivery-1'],
      ['Công ty lữ hành', 'icon-luggage-1', 'travel-agency'],
      ['Hướng dẫn viên', 'icon-Tour-guide'],
      ['Dự án du lịch', 'icon-Travel'],
      ['Quản trị báo cáo', 'icon-report-1'],
      ['Thống kê báo cáo', 'icon-Chart'],
      ['Quản lý tài khoản', 'icon-account'],
    ],
  }),
}
</script>

<style scoped>
  .v-list-item__prepend i{
      font-size: 30px;
      margin-right: 10px;
  }
</style>