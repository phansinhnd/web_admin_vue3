<template>
    <v-col cols="4" class="pb-0 pr-0">
        <v-autocomplete
                label="Chọn Tỉnh/Thành phố"
                variant="outlined"
                :items="provinces"
                v-model="provinceId"
                item-value="id"
                item-title="name"
                no-data-text="Không có dữ liệu"
                :loading="loading"
                @update:model-value="onProvinceChange"
        ></v-autocomplete>
        <div v-if="error">{{ error }}</div>
    </v-col>
    <v-col cols="4" class="pb-0 pr-0">
        <v-autocomplete
                label="Chọn Quận/Huyện"
                variant="outlined"
                :items="districts"
                v-model="districtId"
                item-value="id"
                item-title="name"
                item-text="name"
                no-data-text="Không có dữ liệu"
                :loading="loading"
                @update:model-value="onDistrictChange"
        ></v-autocomplete>
    </v-col>
    <v-col cols="4" class="pb-0 pr-0">
        <v-autocomplete
                label="Chọn Xã/Phường"
                variant="outlined"
                :items="wards"
                v-model="wardId"
                item-value="id"
                item-title="name"
                no-data-text="Không có dữ liệu"
                :loading="loading"
                @update:model-value="onWardChange"
        ></v-autocomplete>
    </v-col>

</template>

<script>
    import {API_ROUTES} from '~/constants/apiRoutes';
    import {httpApi} from "../utils/httpApi";

    export default {
        emits: ['getObjectAddress'],

        data() {
            return {
                error: null,
                loading: false,
                provinces: [],
                districts: [],
                wards: [],
                provinceId: null,
                districtId: null,
                wardId: null,
            };
        },
        computed: {
            objectAddress() {
                return {
                    provinceId: this.provinceId,
                    districtId: this.districtId,
                    wardId: this.wardId
                };
            }
        },

        methods: {

            onProvinceChange(provinceId) {
                this.fetchDistrict(provinceId);
                this.$emit('getObjectAddress', this.objectAddress);
            },

            onDistrictChange(districtId) {
                this.fetchWard(districtId);
                this.$emit('getObjectAddress', this.objectAddress);
            },

            onWardChange(wardId) {
                this.$emit('getObjectAddress', this.objectAddress);
            },

            async fetchWard(districtId) {
                this.wardId = null
                this.loading = true;
                try {
                    const data = await httpApi.get(API_ROUTES.ADDRESS.WARD, {
                        params: {districtId}
                    });
                    if (data.errorCode === "SUCCESS") {
                        this.wards = data.data;
                    }
                } catch (error) {
                    this.error = 'Lỗi khi lấy dữ liệu';
                    console.error('Error fetching data:', error);
                } finally {
                    this.loading = false;
                }
            },

            async fetchDistrict(provinceId) {
                this.districtId = null
                this.wardId = null
                this.wards = []
                this.loading = true;
                try {
                    const data = await httpApi.get(API_ROUTES.ADDRESS.DISTRICT, {
                        params: {provinceId}
                    });
                    if (data.errorCode === "SUCCESS") {
                        this.districts = data.data;
                    }
                } catch (error) {
                    this.error = 'Lỗi khi lấy dữ liệu';
                    console.error('Error fetching data:', error);
                } finally {
                    this.loading = false;
                }
            },

            async fetchProvinceData() {
                this.provinceId = null
                this.districtId = null
                this.wardId = null
                this.districts = []
                this.wards = []
                this.loading = true;
                try {
                    const data = await httpApi.get(API_ROUTES.ADDRESS.PROVINCE);
                    if (data.errorCode === "SUCCESS") {
                        this.provinces = data.data;
                    }
                } catch (error) {
                    this.error = 'Lỗi khi lấy dữ liệu';
                    console.error('Error fetching data:', error);
                } finally {
                    this.loading = false;
                }
            }

        },
        mounted() {
            this.fetchProvinceData();
        }
    };
</script>

<style scoped>

</style>
