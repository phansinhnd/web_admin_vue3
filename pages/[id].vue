<template>
  <div class="detail-CSDT">
    <div class="title">
      <span>Thêm mới nội dung du lịch - Cơ sở và đối tượng</span>
      <div>
        <button class="btn-cancel">HỦY</button>
        <button class="btn-save">
          <i class="mdi mdi-check"></i>
          LƯU VÀ GỬI DUYỆT
        </button>
      </div>
    </div>

    <div class="info">
      <div class="info-general">
        <span class="title-info">
          <span>Thông tin bài viết</span>
        </span>
        <v-row style="margin-top: 5px">
          <v-col cols="4">
            <v-text-field placeholder="Tiêu đề bài viết" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-autocomplete
                placeholder="Danh mục *"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="outlined"
            ></v-autocomplete>
          </v-col>
        </v-row>

        <span class="title-info">
          <span>Mô tả chi tiết</span>
        </span>
        <editor style="margin-top: 10px; margin-bottom: 10px"
                v-if="isClient"
                api-key="mm9qc1qhjcnc6nu8vg009s3m8ol0d9uqo64yd2ykf3cm2z2i"
                :init="editorInit"
        />

        <span class="title-info">
          <span>Thông tin đối tượng</span>
        </span>
        <v-row style="margin-top: 5px">
          <v-col cols="4">
            <v-text-field placeholder="Loại đối tượng nội dung" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-autocomplete
                placeholder="Chọn đối tượng"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="outlined"
            ></v-autocomplete>
          </v-col>
        </v-row>

        <span>Trending</span>
        <v-radio-group inline v-model="selectedOptionTrend">
          <v-radio style="margin-right: 20px" label="Có" value="1" @click="updateSelectTrend('1')"></v-radio>
          <v-radio label="Không" value="0" @click="updateSelectTrend('0')"></v-radio>
        </v-radio-group>

        <span>Sử dụng AR</span>
        <v-radio-group inline v-model="selectedOptionAR">
          <v-radio label="Có" value="1" @click="updateSelectAr('1')"></v-radio>
          <v-radio label="Không" value="0" @click="updateSelectAr('0')"></v-radio>
        </v-radio-group>
      </div>

      <div>
        <span style="margin-left: 10px">VR</span>
        <v-text-field placeholder="Nhập link VR" variant="outlined" style="margin-right: 20px; margin-top: 10px;"></v-text-field>
      </div>

      <div style="margin-bottom: 15px">
        <span style="border-left: #007bff 5px solid">
          <span style="margin-left: 15px">Ảnh logo</span>
        </span>
        <div
            style="display: grid; align-content: center; text-align: center; width: 140px; height: 130px; border: #007bff 1px dashed; margin-top: 10px">
          <v-icon style="margin: auto" color="primary">mdi-image-plus</v-icon>
          <span class="ml-2" style="color: #007bff">Thêm hình ảnh</span>
          <span class="ml-2" style="color: #007bff">1/1</span>
        </div>
      </div>

      <div style="margin-bottom: 15px">
        <span style="border-left: #007bff 5px solid">
          <span style="margin-left: 15px">Ảnh Banner</span>
        </span>
        <div
            style="display: grid; align-content: center; text-align: center; width: 140px; height: 130px; border: #007bff 1px dashed; margin-top: 10px">
          <v-icon style="margin: auto" color="primary">mdi-image-plus</v-icon>
          <span class="ml-2" style="color: #007bff">Thêm hình ảnh</span>
          <span class="ml-2" style="color: #007bff">1/1</span>
        </div>
      </div>

      <div style="padding: 0 0 10px 0">
        <span style="border-left: #007bff 5px solid">
          <span style="margin-left: 15px">Ảnh thumbnail</span>
        </span>
        <div
            style="display: grid; align-content: center; text-align: center; width: 140px; height: 130px; border: #007bff 1px dashed; margin-top: 10px">
          <v-icon style="margin: auto" color="primary">mdi-image-plus</v-icon>
          <span class="ml-2" style="color: #007bff">Thêm hình ảnh</span>
          <span class="ml-2" style="color: #007bff">1/1</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Editor from "@tinymce/tinymce-vue";

const route = useRoute()
console.log(route.params.id)
const selectedOptionTrend = ref('0');
const selectedOptionAR = ref('0');
const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
});

const editorInit = {
  selector: '.tinymce',
  height: 300,
  menubar: false,
  plugins: ['link', 'image', 'code'],
  toolbar: 'undo redo | styles | bold italic | fontselect fontsizeselect | alignleft aligncenter alignright alignjustify | bullist numlist | link unlink | image ',

};

const updateSelectTrend = (value) => {
  selectedOptionTrend.value = value;
};

const updateSelectAr = (value) => {
  selectedOptionAR.value = value;
};
</script>

<style scoped>

</style>
