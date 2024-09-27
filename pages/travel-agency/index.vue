<template>
  <BasePage
      :searchPlaceholder="'Tên, ID doanh nghiệp lữ hành'"
      :titleText="'Danh sách doanh nghiệp lữ hành'"
      :totalPages="Math.ceil(allItems.length / itemsPerPage)"
      :path="'/travel-agency/create'"
      @page-changed="onPageChanged"
  >
    <template #table-headers>
      <tr>
        <th><input type="checkbox" v-model="selectAll" @change="toggleSelectAll"></th>
        <th>ID</th>
        <th>Tên doanh nghiệp lữ hành</th>
        <th>Loại doanh nghiệp lữ hành</th>
        <th>Quận/Huyện</th>
        <th>Phường/Xã</th>
        <th>Mã số thuế</th>
        <th>Trạng thái</th>
        <th>Tháo tác</th>
        <th>Đồng bộ</th>
      </tr>
    </template>
    <template #table-rows>
      <tr v-for="item in pagedItems" :key="item.id">
        <td><input type="checkbox" v-model="item.selected" @change="updateSelectedDetails(item)"></td>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.province }}</td>
        <td>{{ item.district }}</td>
        <td>{{ item.taxCode }}</td>
        <td>{{ item.status }}</td>
        <td>
          <button class="icon-btn">
            <NuxtLink :to="`/travel-agency/${item.id}`">
              <i class="icon-Edit"></i>
            </NuxtLink>
          </button>
          <button class="icon-btn"> <i class="mdi mdi-delete"></i></button>
        </td>
        <td><v-switch ></v-switch></td>
      </tr>
    </template>
  </BasePage>
</template>

<script setup>
import { ref } from 'vue';
import BasePage from '../../components/BasePage.vue'

const allItems = ref([
  { id: 1, name: 'Khách sạn Hoa Sen', type: 'Khách sạn', province: 'Quận 1', district: 'Quận 1', taxCode: '123456789', category: 'Khách sạn 4 sao', status: 'Hoạt động'},
  { id: 1, name: 'Khách sạn Hoa Sen', type: 'Khách sạn', province: 'Quận 1', district: 'Quận 1', taxCode: '123456789', category: 'Khách sạn 4 sao', status: 'Hoạt động'},
  { id: 1, name: 'Khách sạn Hoa Sen', type: 'Khách sạn', province: 'Quận 1', district: 'Quận 1', taxCode: '123456789', category: 'Khách sạn 4 sao', status: 'Hoạt động'},
  { id: 1, name: 'Khách sạn Hoa Sen', type: 'Khách sạn', province: 'Quận 1', district: 'Quận 1', taxCode: '123456789', category: 'Khách sạn 4 sao', status: 'Hoạt động'},
  { id: 1, name: 'Khách sạn Hoa Sen', type: 'Khách sạn', province: 'Quận 1', district: 'Quận 1', taxCode: '123456789', category: 'Khách sạn 4 sao', status: 'Hoạt động'},
]);

const currentPage = ref(1);
const itemsPerPage = 15;

const pagedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return allItems.value.slice(start, end);
});

const onPageChanged = (page) => {
  currentPage.value = page;
};

const selectAll = ref(false);

const toggleSelectAll = () => {
  console.log(pagedItems.value.length)
  const isChecked = selectAll.value;
  pagedItems.value.forEach(item => {
    item.selected = isChecked;
  });
};

const updateSelectedDetails = (item) => {
  // console.log(`Item selected: ${item.id}, Selected: ${item.selected}`);
};
</script>

<style scoped>

</style>
