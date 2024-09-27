<template>
  <v-container>

    <head-body :title="'Trang Dashboard'" @apply="applyDialog">
    </head-body>

    <v-card class="pa-4" style="margin-bottom: 15px;">

      <v-tabs
              v-model="tab"
              align-tabs="begin"
              color="blue-accent-4"
      >
        <v-tab :value="1">Landscape</v-tab>
        <v-tab :value="2">City</v-tab>
        <v-tab :value="3">Abstract</v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item
                :key="1"
                :value="1"
        >
          <v-container fluid>
            <v-row>
              <v-col
                      v-for="i in 6"
                      :key="i"
                      cols="12"
                      md="4"
              >
                <v-text-field label="Tên món đồ ăn uống" variant="outlined"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
        <v-tabs-window-item
                :key="2"
                :value="2"
        >
          <v-container fluid>
            <v-row>
              <v-col
                      v-for="i in 6"
                      :key="i"
                      cols="12"
                      md="4"
              >
                <v-text-field label="Tên món đồ ăn uống" variant="outlined"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
        <v-tabs-window-item
                :key="3"
                :value="3"
        >
          <v-container fluid>

          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>

      <div style="display: flex;justify-content: center;">
        <Button
                class="ml-4"
                icon="icon-Search"
                backgroundColor="#007bff"
                textColor="#ffffff"
                :disabled="false"
        >
          TÌM KIẾM
        </Button>
      </div>
    </v-card>

    <!-- Phần nội dung -->
    <v-card class="pa-4">
      <v-card-text>
        <div>

            <Button
                    icon="icon-Home"
                    backgroundColor="#007bff"
                    textColor="#ffffff"
                    :disabled="false"
                    @click="openDialogConfirm"
            >
              Mở hộp thoại xác nhận
            </Button>
            <confirm-dialog
                    v-model:open="dialogVisible"
                    title="Xác nhận hành động"
                    message="Bạn có chắc chắn muốn xóa mục này không?"
                    @confirm="handleConfirm"
            />

          <Button
                  icon="icon-Home"
                  backgroundColor="#007bff"
                  textColor="#ffffff"
                  :disabled="false"
                  @click="openDialog"
          >
            Open Dialog
          </Button>
        </div>

        <div>
          <v-row class="ma-0">
            <v-col cols="6">
              <v-text-field label="Tên món đồ ăn uống" variant="outlined"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
            </v-col>
          </v-row>
        </div>

        <div>
          <v-form>
            <v-row class="ma-0">

              <Address @getObjectAddress="getObjectAddress"/>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="searchQuery" label="Từ khóa tìm kiếm" outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                        v-model="selectedOption"
                        :items="options"
                        label="Chọn danh mục"
                        outlined
                ></v-select>
              </v-col>
            </v-row>
          </v-form>
        </div>

      </v-card-text>
    </v-card>

    <!--        Tạo dialog cho filter-->
    <div>
      <dialog-filter v-model="showDialog" title="Bộ lọc" :max-width="800">
        <template #content>
          <div style="margin-left: -12px;">
            <v-row class="ma-0 pt-3">
              <v-col cols="6" class="pb-0 pr-0">
                <v-autocomplete
                        label="Autocomplete"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                        variant="outlined"
                ></v-autocomplete>
              </v-col>
              <v-col cols="6" class="pb-0 pr-0">
                <v-autocomplete
                        label="Autocomplete"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                        variant="outlined"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row class="ma-0">
              <v-col cols="6" class="pb-0 pr-0">
                <v-autocomplete
                        label="Autocomplete"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                        variant="outlined"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </div>
        </template>
        <template #footer>
          <Button
                  backgroundColor="#f0f0f0"
                  textColor="#333333"
                  :disabled="false"
                  @click="closeDialog"
          >
            HỦY BỎ
          </Button>
          <Button
                  backgroundColor="#007bff"
                  textColor="#ffffff"
                  :disabled="true"
                  @click="closeDialog"
          >
            ÁP DỤNG
          </Button>
        </template>
      </dialog-filter>
    </div>
  </v-container>

</template>

<script>
  import { ref } from 'vue';

  export default {
    components: {
    },
    data: () => ({
      tab: null,
      maxWidth: 0,
    }),
    methods: {
      getObjectAddress(objectAddress) {
        console.log('Province ID:', objectAddress);
      },

      handleClose() {
        console.log('Đã nhấn HỦY BỎ');
      },
      handleApply() {
        console.log('Đã nhấn ÁP DỤNG');
      },

      applyDialog(){
        console.log('Đã nhấn ÁP DỤNG');
      }
    },
    setup() {
      // Reactive properties
      const showDialog = ref(false);
      const title = ref('Thêm mới nhà hàng dịch vụ');
      const searchQuery = ref('');
      const selectedOption = ref('');
      const options = ref(['Tùy chọn 1', 'Tùy chọn 2', 'Tùy chọn 3']);
      const dialogVisible = ref(false);
      // Open/close dialog
      const openDialog = () => {
        showDialog.value = true;
      };

      const openDialogConfirm = () => {
        dialogVisible.value = true;
      };

      const closeDialog = () => {
        showDialog.value = false;
      };

      const confirmDialog = () => {
        alert('Confirmed!');
        closeDialog();
      };

      const handleConfirm = () => {
        console.log('Hành động đã được xác nhận!');
        dialogVisible.value = false;
      };

      // Search functionality
      const onSearch = () => {
        alert(`Tìm kiếm với từ khóa: ${searchQuery.value} và danh mục: ${selectedOption.value}`);
      };

      // Reset form functionality
      const onReset = () => {
        searchQuery.value = '';
        selectedOption.value = '';
      };

      return {
        showDialog,
        title,
        searchQuery,
        selectedOption,
        options,
        dialogVisible,
        openDialog,
        closeDialog,
        confirmDialog,
        onSearch,
        onReset,
        openDialogConfirm,
        handleConfirm
      };
    },
  };
</script>

<style scoped>

</style>