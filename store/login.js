import {defineStore} from 'pinia';
import Cookies from 'js-cookie';
import APIs from '~/assets/configurations/API_Config';

export const useLoginStore = defineStore('login', {
    state: () => ({
        username: {
            errors: [],
            value: '',
        },
        password: {
            errors: [],
            value: '',
        },
        // clientId: null,
        path: null,
        isLogin: false,
        logging: false,
    }),

    actions: {
        async login({ commit }, { userName, password }) {
            const channel = APIs.channel; // Lấy channel từ cấu hình API
            let transid = uniqid(); // Tạo ID giao dịch duy nhất

            try {
                const response = await this.$axios({
                    url: 'https://core-dev.vtvtravel.vn/sys/v1/tourism/admin',
                    method: APIs.login.method,
                    data: {
                        // channel,
                        // transid,
                        userName,
                        password,
                    },
                });

                // Xử lý thành công, có thể commit mutation hoặc làm gì đó khác
                commit('SET_USER', response.data); // Giả sử bạn có mutation để lưu thông tin người dùng
                return response;
            } catch (error) {
                console.error('Đăng nhập thất bại:', error);
                throw error; // Ném lại lỗi để xử lý sau
            }
        },
        isAuthenticated(req) {
            let token;
            if (req) {
                try {
                    token = req.headers.cookie
                        .split(';')
                        .find((c) => c.trim().startsWith('token='))
                        .split('=')[1];
                } catch (e) {
                    token = '';
                }
            } else {
                token = Cookies.get('token') || '';
            }
            return token;
        },

        setUsername(payload) {
            this.username = {
                ...this.username,
                value: payload,
                errors: [],
            };
        },

        setPassword(payload) {
            this.password = {
                ...this.password,
                value: payload,
                errors: [],
            };
        },

        async submit() {
            const userName = this.username.value;
            const password = this.password.value;
            // const clientId = this.clientId;
            // console.log(userName, password, clientId);

            if (userName.indexOf(' ') >= 0) {
                this.username.errors = ['Tên người dùng không hợp lệ.'];
                this.logging = false;
                return;
            }

            if (!userName || !password) {
                this.username.errors = ['Tên người dùng không hợp lệ.'];
                this.password.errors = ['Tài khoản người dùng hoặc mật khẩu không hợp lệ'];
                this.logging = false;
                return;
            }

            // this.username.errors = [];
            // this.password.errors = [];

            try {
                const response = await this.$login({
                    userName,
                    password,
                    // clientId,
                });
                // console.log(1);
                console.log(response);
                // console.log(2);

                // const errorCode = response.data.error.code;

                const data = response.data.data;
                // console.log(errorCode, data);

                if (errorCode === APIs.responses.OK.code) {
                    this.isLogin = true;
                    Cookies.set('token', data.token);
                    Cookies.set('username', data.user.userName);
                    Cookies.set('customerId', data.user.customerId);
                    Cookies.set('userId', data.user.id);
                    Cookies.set('fullname', data.user.fullName || '');

                    const listGroups = response.data.data.groups.map(group => group.groupName);
                    const strGroup = ',' + listGroups.toString() + ',';
                    Cookies.set('strListGroup', strGroup);

                    if (data.token) {
                        this.username.value = '';
                        this.password.value = '';
                        this.$router.push('/');
                    }
                } else if (errorCode === APIs.login.responses.CREDENTIALS_INVALID.code) {
                    this.username.errors = ['Tài khoản người dùng hoặc mật khẩu không hợp lệ'];
                    this.password.errors = ['Tài khoản người dùng hoặc mật khẩu không hợp lệ'];
                }

                this.logging = false;
            } catch (errors) {
                console.log('Lỗi call api');

                this.logging = false;
            }
        },
    },
});
