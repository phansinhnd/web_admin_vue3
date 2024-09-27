<script>
import {VDateInput} from 'vuetify/labs/VDateInput'

export default {
  components: {
    VDateInput,
  },
  data() {
    return {
      date: null,
    };
  },
  methods: {},
};
</script>

<template>
  <v-row class="create-staff">
    <v-col cols="12" class="title">
      <span>Thêm mới doanh nghiệp lữ hành</span>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-item class="title-row">
          <span class="title-info"></span>
          <span>Thông tin bài viết</span>
        </v-card-item>
        <v-card-item>
          <v-row>
            <v-col cols="4">
              <v-text-field placeholder="Họ và tên" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field placeholder="CMND & CCCD" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field placeholder="Ngày sinh" variant="outlined"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field placeholder="Giới tính" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field placeholder="Số điện thoại" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field placeholder="Email" variant="outlined"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field placeholder="Nơi ở hiện tại" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field placeholder="Nơi ở thường trú" variant="outlined"></v-text-field>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>

      <v-card style="margin-top: 20px">
        <v-card-item class="title-row">
          <span class="title-info"></span>
          <span>Trình độ học vấn</span>
        </v-card-item>
        <v-card-item>
          <v-row>
            <v-col cols="4">
              <v-text-field placeholder="Trình độ học vấn" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field placeholder="Trường học" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field placeholder="Chuyên ngành" variant="outlined"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" style="padding: 0 0 0 15px">
              <span>Chứng nhận đào tạo nghiệp vụ</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field placeholder="Chứng chỉ đào tạo nghiệp vụ" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <div style="position: relative; display: flex; align-items: center;">
                <v-date-input
                    ref="dateInput"
                    v-model="date"
                    variant="outlined"
                    placeholder="Ngày cấp"
                    :locale="'vi'"
                    style="flex-grow: 1;"
                />
                <i
                    class="icon-Calendar"
                    style="position: absolute; right: 10px; font-size: 25px; color: #A3A3A3; cursor: pointer"
                ></i>
              </div>
            </v-col>
            <v-col cols="1" style="align-content: center">
              <Button style="width: 100%"><i class="icon-Upload"/> Tải lên</Button>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" style="padding: 0 0 0 15px">
              <span>Trình độ ngoại ngữ</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field placeholder="Trình độ ngoại ngữ" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <div style="position: relative; display: flex; align-items: center;">
                <v-date-input
                    ref="dateInput"
                    v-model="date"
                    variant="outlined"
                    placeholder="Ngày cấp"
                    :locale="'vi'"
                    style="flex-grow: 1;"
                />
                <i
                    class="icon-Calendar"
                    style="position: absolute; right: 10px; font-size: 25px; color: #A3A3A3; cursor: pointer"
                ></i>
              </div>
            </v-col>
            <v-col cols="1" style="align-content: center">
              <Button style="width: 100%"><i class="icon-Upload"/> Tải lên</Button>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>

      <v-card style="margin-top: 20px">
        <v-card-item class="title-row">
          <span class="title-info"></span>
          <span>Chi tiết công việc</span>
        </v-card-item>
        <v-card-item>
          <v-row>
            <v-col cols="12">
              <span>Thông tin hợp đồng</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field placeholder="Loại hợp đồng" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field placeholder="lĩnh vực làm việc" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field placeholder="Tình trạng" variant="outlined"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field placeholder="Chức vụ" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
              <div style="position: relative; display: flex; align-items: center;">
                <v-date-input
                    ref="dateInput"
                    v-model="date"
                    variant="outlined"
                    placeholder="Ngày bắt đàu"
                    :locale="'vi'"
                    style="flex-grow: 1;"
                />
                <i
                    class="icon-Calendar"
                    style="position: absolute; right: 10px; font-size: 25px; color: #A3A3A3; cursor: pointer"
                ></i>
              </div>
            </v-col>
            <v-col cols="4">
              <div style="position: relative; display: flex; align-items: center;">
                <v-date-input
                    ref="dateInput"
                    v-model="date"
                    variant="outlined"
                    placeholder="Ngày kết thúc"
                    :locale="'vi'"
                    style="flex-grow: 1;"
                />
                <i
                    class="icon-Calendar"
                    style="position: absolute; right: 10px; font-size: 25px; color: #A3A3A3; cursor: pointer"
                ></i>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <span>Giáy khám sức khỏe</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <div style="position: relative; display: flex; align-items: center;">
                <v-date-input
                    ref="dateInput"
                    v-model="date"
                    variant="outlined"
                    placeholder="Ngày bắt đầu"
                    :locale="'vi'"
                    style="flex-grow: 1;"
                />
                <i
                    class="icon-Calendar"
                    style="position: absolute; right: 10px; font-size: 25px; color: #A3A3A3; cursor: pointer"
                ></i>
              </div>
            </v-col>
            <v-col cols="4">
              <div style="position: relative; display: flex; align-items: center;">
                <v-date-input
                    ref="dateInput"
                    v-model="date"
                    variant="outlined"
                    placeholder="Ngày kết thúc"
                    :locale="'vi'"
                    style="flex-grow: 1;"
                />
                <i
                    class="icon-Calendar"
                    style="position: absolute; right: 10px; font-size: 25px; color: #A3A3A3; cursor: pointer"
                ></i>
              </div>
            </v-col>
            <v-col cols="1" style="align-content: center">
              <Button style="width: 100%"><i class="icon-Upload"/> Tải lên</Button>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>