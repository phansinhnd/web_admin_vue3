<template>
  <div class="create-travel">
    <div class="title">
      <span>Thêm mới doanh nghiệp lữ hành</span>
      <div>
        <button class="btn-cancel">HỦY</button>
        <button class="btn-save">
          <i class="mdi mdi-check"></i>
          LƯU
        </button>
      </div>
    </div>

    <div class="info">
      <v-card class="pa-4" style="margin-bottom: 15px;">
        <v-tabs v-model="tab" align-tabs="start" color="blue-accent-4">
          <v-tab value="1">Thông tin cơ bản</v-tab>
          <v-tab value="2">Nhân viên</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="1">
            <div class="info-general">
              <v-row class="title-row">
                <span class="title-info"></span>
                <span>Thông tin bài viết</span>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field placeholder="Tên doanh nghiệp lữ hành *" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-autocomplete
                      placeholder="Tài khoản *"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="4">
                  <v-text-field placeholder="Chủ sở hữu *" variant="outlined"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field placeholder="Mã số thuế *" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-autocomplete
                      placeholder="Loại hình *"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="4">
                  <v-autocomplete
                      placeholder="Phạm vi *"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field placeholder="Email *" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-autocomplete
                      placeholder="Số điện thoại *"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="4">
                  <v-text-field placeholder="Trang web" variant="outlined"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-autocomplete
                      placeholder="Tỉnh/ Thành phố *"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="4">
                  <v-autocomplete
                      placeholder="Quận/ Huyện *"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="4">
                  <v-autocomplete
                      placeholder="Phường/ Xã *"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field placeholder="Địa chỉ cụ thể" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field placeholder="kinh độ" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field placeholder="Vĩ độ" variant="outlined"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-autocomplete
                      placeholder="Loại hinh doanh nghiệp *"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="4">
                  <v-autocomplete
                      placeholder="Ngày mở cửa *"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="4">
                  <v-autocomplete
                      placeholder="Giờ hoạt động *"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <div style="height: 30px"></div>
              <v-row class="title-row">
                <span class="title-info"></span>
                <span>Ký quỹ</span>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field placeholder="Vốn ký quỹ" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field placeholder="Tài khoản ký quỹ" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-autocomplete
                      placeholder="Tại ngân hàng"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row class="title-row">
                <span class="title-info"> </span>
                <span>Giấy phép kinh doanh</span>
              </v-row>
              <v-row style="align-items: center; margin-top: -6px">
                <v-col >
                  <v-text-field placeholder="Tài khoản ký quỹ" variant="outlined"></v-text-field>
                </v-col>
                <v-col >
                  <v-text-field placeholder="Tài khoản ký quỹ" variant="outlined"></v-text-field>
                </v-col>
                <v-col >
                  <v-text-field placeholder="Tài khoản ký quỹ" variant="outlined"></v-text-field>
                </v-col>
                <Button style="height: 40px; width: 130px; background-color: #007bff; margin-bottom: 24px; font-size: 18px;align-items: center;
    justify-content: center;">
                  <i class="icon-Upload"></i> Tải lên</Button>
              </v-row>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="2">
            <v-container fluid>
              <v-row>
                <v-col cols="4" style="padding: 10px 10px 0 0">
                  <v-text-field placeholder="Họ và tên" variant="outlined"></v-text-field>
                </v-col>

                <v-col cols="4" style="padding: 10px 10px 0 0">
                  <v-text-field placeholder="CMND & CCCD" variant="outlined"></v-text-field>
                </v-col>

                <v-col cols="4" style="padding: 10px 10px 0 0">
                  <v-autocomplete
                      placeholder="Tình trạng"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4" style="padding: 0 10px 0 0">
                  <v-autocomplete
                      placeholder="Chức vụ"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="4" style="padding: 0 10px 0 0">
                  <v-text-field placeholder="Số năm làm việc" variant="outlined"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                </v-col>
                <v-col cols="6" style="padding: 0 10px 0 0">
                  <v-btn color="#007bff">
                    <v-icon>mdi-magnify</v-icon>
                    TÌM KIẾM
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </div>
    <div class="info">
      <v-card>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="1" transitione="slide-y-transition">
            <div class="info-general" style="padding: 8px">
              <v-row class="title-row" style="margin-left: 5px">
                <span class="title-info"></span>
                <span>Thông tin bài viết</span>
              </v-row>
              <div style="margin-left: 5px; display: grid; align-content: center; text-align: center; width: 140px; height: 130px; border: #007bff 1px dashed; margin-top: 10px">
                <v-icon style="margin: auto" color="primary">mdi-image-plus</v-icon>
                <span class="ml-2" style="color: #007bff">Thêm hình ảnh</span>
                <span class="ml-2" style="color: #007bff">1/6</span>
              </div>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="2">
            <v-col cols="12">
              <v-row
                  style="height: 50px; background-color: #141414; color: white; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; justify-content: space-between">
                <div style="align-items: center; display: flex;margin-left: 20px;}">
                  <span>Danh sách nhân viên</span>
                </div>
                <div class="btn-action">
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
                    <NuxtLink :to="`/travel-agency/staff`">
                      <i class="icon-Add"></i>
                    </NuxtLink>
                  </button>
                </div>
              </v-row>
            </v-col>
            <v-col cols="12" style="padding: 12px 0 12px 0">
              <table style="width: 100%; text-align: center">
                <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>CCCD & CMND</th>
                  <th>Chức vụ</th>
                  <th>Tình trạng</th>
                  <th>Thao tác</th>
                  <th>Đồng bộ</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in pagedItems" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.province }}</td>
                  <td>{{ item.district }}</td>
                  <td>
                    <button class="icon-btn">
                      <NuxtLink :to="`/travel-agency/staff`">
                        <i class="icon-Edit"></i>
                      </NuxtLink>
                    </button>
                    <button class="icon-btn"><i class="mdi mdi-delete"></i></button>
                  </td>
                  <td style="justify-content: center; display: flex">
                    <v-switch></v-switch>
                  </td>
                </tr>
                </tbody>
              </table>
            </v-col>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "1",
      pagedItems: [
        {id: 1, name: 'Khách sạn Hoa Sen', type: 'Khách sạn', province: 'Quận 1', district: 'Quận 1'},
        {id: 1, name: 'Khách sạn Hoa Sen', type: 'Khách sạn', province: 'Quận 1', district: 'Quận 1'},

      ]
    };
  },
  methods: {
    editItem(item) {
      console.log('Editing item:', item.id);
    },
    deleteItem(item) {
      console.log('Deleting item:', item.id);
    }
  }
};
</script>

<style scoped>

</style>
