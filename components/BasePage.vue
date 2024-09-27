<template>
  <div class="travel">
    <div class="button-filter">
      <div class="search-filter-container">
        <div class="search-input-wrapper">
          <input type="text" :placeholder="searchPlaceholder"/>
          <button class="search-btn">
            <i class="mdi mdi-magnify"></i>
          </button>
        </div>
        <button class="filter-btn">
          <i class="icon-filter"></i>
          <span>Bộ lọc</span>
        </button>
      </div>
      <div class="button-right">
        <button class="filter-btn-2">
          <i class="icon-Remove"></i>
          <span>XÓA</span>
        </button>
      </div>
    </div>
    <div class="table-data" style="margin-top: 20px">
      <div class="title">
        <div class="left">
          <p>{{ titleText }}</p>
        </div>
        <div class="right" style="">
          <button class="group-zoom">
            <i class="icon-Zoom-in"></i>
          </button>
          <button class="group-reload">
            <i class="icon-Reload"></i>
          </button>
          <button class="group-download">
            <i class="icon-Download"></i>
          </button>
          <button class="group-1">
            <NuxtLink :to="props.path" style="text-decoration: none;">
              <i class="icon-Add"></i>
            </NuxtLink>
          </button>
        </div>
      </div>
      <div class="data">
        <table>
          <thead>
          <slot name="table-headers"></slot>
          </thead>
          <tbody>
          <slot name="table-rows"></slot>
          </tbody>
        </table>
        <div class="pagination">
          <button @click="previousPage" :disabled="currentPage === 1">Trước</button>
          <button
              v-for="page in totalPages"
              :key="page"
              :class="{ active: page === currentPage }"
              @click="goToPage(page)"
          >
            {{ page }}
          </button>

          <button @click="nextPage" :disabled="currentPage === totalPages">Sau</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, defineProps} from 'vue';

const props = defineProps({
  searchPlaceholder: {
    type: String,
    default: 'Tên, ID cơ sở'
  },
  titleText: {
    type: String,
    default: ''
  },
  path: {
    type: String,
    default: ''
  },
  totalPages: {
    type: Number,
    default: 1
  }
});

const currentPage = ref(1);

const emit = defineEmits(['page-changed']);

const goToPage = (page) => {
  currentPage.value = page;
  emit('page-changed', page);
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit('page-changed', currentPage.value);
  }
};

const nextPage = () => {
  if (currentPage.value < props.totalPages) {
    currentPage.value++;
    emit('page-changed', currentPage.value);
  }
};

</script>

<style scoped>

</style>
