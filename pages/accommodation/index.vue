<template>
    <v-container>
        <div style="display: flex">
            <div class="search-container">
                <input
                        v-model="searchTerm"
                        type="text"
                        class="search-input"
                        placeholder="Tìm kiếm..."
                        @input="onSearch"
                />
                <span class="search-icon"><i class="icon-Search"></i></span>
            </div>
            <Button
                    class="ml-4"
                    icon="icon-filter"
                    backgroundColor="#FFFFFF"
                    textColor="#5C5C5C"
                    :disabled="false"
            >
                BỘ LỌC
            </Button>

            <Button
                    class="ml-4 ml-auto"
                    icon="icon-Remove"
                    backgroundColor="#FFFFFF"
                    textColor="#5C5C5C"
                    :disabled="false"
                    @click="confirmDelete"
            >
                XÓA
            </Button>
        </div>

        <v-card class="pa-4 mt-4">
            <v-card-text>

                <BasePage
                        :searchPlaceholder="'Tên, ID cơ sở'"
                        :titleText="'Cơ sở du lịch'"
                        :totalPages="Math.ceil(allItems.length / itemsPerPage)"
                        @page-changed="onPageChanged"
                >
                    <template #table-headers>
                        <tr>
                            <th><input type="checkbox" v-model="selectAll" @change="toggleSelectAll"></th>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Loại</th>
                            <th>Địa chỉ</th>
                            <th>Danh mục</th>
                            <th>Trạng thái</th>
                            <th>Tháo tác</th>
                        </tr>
                    </template>
                    <template #table-rows>
                        <tr v-for="item in pagedItems" :key="item.id">
                            <td><input type="checkbox" v-model="item.selected" @change="updateSelectedDetails(item)"></td>
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.type }}</td>
                            <td>{{ item.address }}</td>
                            <td>{{ item.category }}</td>
                            <td>{{ item.status }}</td>
                            <td>
                                <button class="icon-btn">
                                    <NuxtLink :to="`/travel-agency/${item.id}`">
                                        <i class="mdi mdi-view-agenda"></i>
                                    </NuxtLink>
                                </button>
                                <button class="icon-btn"> <i class="mdi mdi-delete"></i></button>
                                <button class="icon-btn"> <i class="mdi mdi-update"></i></button>
                            </td>
                        </tr>
                    </template>
                </BasePage>

            </v-card-text>
        </v-card>

        <confirm-dialog
                v-model:open="dialogConfirmDelete"
                title="Xác nhận hành động"
                message="Bạn có chắc chắn muốn xóa mục này không?"
                @confirm="handleConfirmDelete"
        />

    </v-container>

</template>

<script setup>
    import { ref } from 'vue';
    const searchTerm = ref('');
    const dialogConfirmDelete = ref(false);

    const onSearch = () => {
        console.log('Search Term:', searchTerm.value);

    };

    const allItems = ref([
        { id: 1, name: 'Khách sạn Hoa Sen', type: 'Khách sạn', address: '123 Đường Lê Lợi, Quận 1, TP HCM', category: 'Khách sạn 4 sao', status: 'Hoạt động'},
        { id: 2, name: 'Resort Biển Xanh', type: 'Resort', address: '567 Đường Võ Nguyên Giáp, Phan Thiết, Bình Thuận', category: 'Resort 5 sao', status: 'Hoạt động'},
        { id: 3, name: 'Nhà hàng Hải Sản Đại Dương', type: 'Nhà hàng', address: '234 Đường Trần Hưng Đạo, Nha Trang, Khánh Hòa', category: 'Nhà hàng hải sản', status: 'Đóng cửa tạm thời'},
        { id: 4, name: 'Khu nghỉ dưỡng Suối Khoáng', type: 'Khu nghỉ dưỡng', address: '89 Đường Nguyễn Du, Quảng Bình', category: 'Khu nghỉ dưỡng', status: 'Hoạt động'},
        { id: 5, name: 'Công viên Vui Chơi Nước Xanh', type: 'Công viên', address: '90 Đường Hoàng Văn Thụ, Đà Nẵng', category: 'Công viên giải trí', status: 'Hoạt động'},
        { id: 6, name: 'Tour Du lịch Hạ Long', type: 'Công ty lữ hành', address: '12 Đường Ngô Quyền, Hạ Long, Quảng Ninh', category: 'Tour du lịch', status: 'Hoạt động'},
        { id: 7, name: 'Du thuyền Sài Gòn', type: 'Du thuyền', address: '789 Bến Bạch Đằng, Quận 1, TP HCM', category: 'Du thuyền', status: 'Đóng cửa bảo trì'},
        { id: 8, name: 'Homestay Đà Lạt Xanh', type: 'Homestay', address: '45 Đường Hùng Vương, Đà Lạt, Lâm Đồng', category: 'Homestay', status: 'Hoạt động'},
        { id: 9, name: 'Văn phòng Du lịch Sapa', type: 'Văn phòng', address: '234 Đường Mường Hoa, Sapa, Lào Cai', category: 'Văn phòng du lịch', status: 'Hoạt động'},
        { id: 10, name: 'Khu du lịch sinh thái Cát Bà', type: 'Khu du lịch', address: '987 Đường Lạch Tray, Hải Phòng', category: 'Khu du lịch sinh thái', status: 'Hoạt động'},
        { id: 11, name: 'Khách sạn Hoa Sen', type: 'Khách sạn', address: '123 Đường Lê Lợi, Quận 1, TP HCM', category: 'Khách sạn 4 sao', status: 'Hoạt động'},
        { id: 12, name: 'Resort Biển Xanh', type: 'Resort', address: '567 Đường Võ Nguyên Giáp, Phan Thiết, Bình Thuận', category: 'Resort 5 sao', status: 'Hoạt động'},
        { id: 13, name: 'Nhà hàng Hải Sản Đại Dương', type: 'Nhà hàng', address: '234 Đường Trần Hưng Đạo, Nha Trang, Khánh Hòa', category: 'Nhà hàng hải sản', status: 'Đóng cửa tạm thời'},
        { id: 14, name: 'Khu nghỉ dưỡng Suối Khoáng', type: 'Khu nghỉ dưỡng', address: '89 Đường Nguyễn Du, Quảng Bình', category: 'Khu nghỉ dưỡng', status: 'Hoạt động'},
        { id: 15, name: 'Công viên Vui Chơi Nước Xanh', type: 'Công viên', address: '90 Đường Hoàng Văn Thụ, Đà Nẵng', category: 'Công viên giải trí', status: 'Hoạt động'},
        { id: 16, name: 'Tour Du lịch Hạ Long', type: 'Công ty lữ hành', address: '12 Đường Ngô Quyền, Hạ Long, Quảng Ninh', category: 'Tour du lịch', status: 'Hoạt động'},
        { id: 17, name: 'Du thuyền Sài Gòn', type: 'Du thuyền', address: '789 Bến Bạch Đằng, Quận 1, TP HCM', category: 'Du thuyền', status: 'Đóng cửa bảo trì'},
        { id: 18, name: 'Homestay Đà Lạt Xanh', type: 'Homestay', address: '45 Đường Hùng Vương, Đà Lạt, Lâm Đồng', category: 'Homestay', status: 'Hoạt động'},
        { id: 19, name: 'Văn phòng Du lịch Sapa', type: 'Văn phòng', address: '234 Đường Mường Hoa, Sapa, Lào Cai', category: 'Văn phòng du lịch', status: 'Hoạt động'},
        { id: 20, name: 'Khu du lịch sinh thái Cát Bà', type: 'Khu du lịch', address: '987 Đường Lạch Tray, Hải Phòng', category: 'Khu du lịch sinh thái', status: 'Hoạt động'}
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


    const confirmDelete = () => {
        dialogConfirmDelete.value = true;
    }

    const handleConfirmDelete = () => {
        console.log('Hành động đã được xác nhận!');
        dialogConfirmDelete.value = false;
    };

</script>

<style scoped>
    .search-container {
        position: relative;
        width: 100%;
        max-width: 400px;
    }

    .search-input {
        width: 100%;
        padding: 10px 40px 10px 15px;
        font-size: 16px;
        border: 1px solid #EBEBEB;
        border-radius: 5px;
        outline: none;
        background: #ffffff;
    }

    .search-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #555;
        font-size: 26px;
        pointer-events: none;
    }
    .ml-auto {
        margin-left: auto;
    }
</style>
