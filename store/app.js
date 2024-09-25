// import Cookies from 'js-cookie'
// import ULT from '~/plugins/ult'
// import { defineStore } from 'pinia';
// import APIs from '~/assets/configurations/API_Config'
// import moment from 'moment'
//
// export let state = () => ({
//     ip: '',
//     roles: [],
//     getContent: '',
//     pageSizes: [10, 15, 20, 50, 100, 200],
//     getRoles: false,
//     requestObjectType: null,
//     onlyMe: true,
//     alert_display_time: 6000,
//     stateOnlye: true,
//     dateTimeDashboard: [
//         moment().startOf('year').format('YYYY-MM-DD'),
//         moment().format('YYYY-MM-DD'),
//     ],
//     changePass: {
//         url: '/user/changePasswordThisAccount',
//         method: 'POST',
//     },
//     strRoles: null,
//     // reload_treeview: false,
// })
//
// export const mutations = {
//     ClientPrivateIP(state, ip) {
//         state.ip = ip
//     },
//     set_time_alert(state, payload) {
//         state.alert_display_time = Number(payload)
//     },
//     setRole(state, payload) {
//         state.roles = payload
//         state.getRoles = true
//     },
//     setRequestObjectType(state, payload) {
//         state.requestObjectType = payload
//     },
//     setDateTimeDashboard(state, payload) {
//         state.dateTimeDashboard = payload
//     },
//     setOnlyme(state, payload) {
//         state.onlyMe = payload
//     },
//     setStateOnlyme(state, payload) {
//         state.stateOnlye = payload
//     },
//     setContent(state, payload) {
//         state.getContent = payload
//     },
// }
//
// export const actions = {
//     async changePass(vueContext, payload) {
//         const response = await this.$axios({
//             url: vueContext.state.changePass.url,
//             method: vueContext.state.changePass.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             data: {
//                 ...payload,
//             },
//         })
//         return response
//     },
//
//     async GetRole(vueContext, payload) {
//         let data = [
//             {
//                 id: 1,
//                 pageName: 'Trang chủ',
//                 pageUrl: '/',
//                 pageIcon: 'mdi-home',
//                 parentId: 0,
//                 menuIndex: 1,
//                 level: 0,
//                 pageType: 0,
//                 redirectType: null,
//                 roles: '10',
//                 showOnMobile: 1,
//                 showOnTablet: 1,
//                 isOpen: null,
//             },
//
//         ]
//         // vueContext.commit('setRole', data)
//
//         await this.$getRoleByUser(payload).then((response) => {
//             try {
//                 let errorCode = response.data.error.code
//                 if (errorCode === APIs.responses.OK.code) {
//                     vueContext.commit('setRole', response.data.data.pageRoles)
//
//                     let listRoles = []
//                     for (let i = 0; i < response.data.data.pageRoles.length; i++) {
//                         listRoles.push(response.data.data.pageRoles[i].roles)
//                     }
//                     let str = ',' + listRoles.toString() + ','
//                     Cookies.set('strRoles', str)
//
//                 } else if (APIs.responses[errorCode] != undefined) {
//                     this.$showError(this.$router.app, APIs.responses[errorCode].message)
//                 } else {
//                     let errorMsg = response.data.error.message
//                     this.$showError(
//                         this.$router.app,
//                         'Đã xảy ra lỗi khi lấy thông tin quyền truy cập. ' + errorMsg
//                     )
//                 }
//             } catch (e) {
//
//             }
//         })
//     },
// }
//
// export const getters = {}
//
//
//

import {defineStore} from 'pinia';
import Cookies from 'js-cookie';
import moment from 'moment';
import {inject} from 'vue';
import APIs from '~/assets/configurations/API_Config';
import ULT from '~/plugins/ult'

export const useAppStore = defineStore('app', {
    state: () => ({
        ip: '',
        roles: [],
        getContent: '',
        pageSizes: [10, 15, 20, 50, 100, 200],
        getRoles: false,
        requestObjectType: null,
        onlyMe: true,
        alert_display_time: 6000,
        stateOnlye: true,
        dateTimeDashboard: [
            moment().startOf('year').format('YYYY-MM-DD'),
            moment().format('YYYY-MM-DD'),
        ],
        changePass: {
            url: '/user/changePasswordThisAccount',
            method: 'POST',
        },
        strRoles: null,
    }),

    actions: {
        createCaptcha() {
            const createCaptcha = inject('createCaptcha');
            if (createCaptcha) {
                return createCaptcha();
            } else {
                console.error('createCaptcha not found!');
                return '11111';
            }
        },
        ClientPrivateIP(ip) {
            this.ip = ip;
        },
        set_time_alert(payload) {
            this.alert_display_time = Number(payload);
        },
        setRole(payload) {
            this.roles = payload;
            this.getRoles = true;
        },
        setRequestObjectType(payload) {
            this.requestObjectType = payload;
        },
        setDateTimeDashboard(payload) {
            this.dateTimeDashboard = payload;
        },
        setOnlyme(payload) {
            this.onlyMe = payload;
        },
        setStateOnlyme(payload) {
            this.stateOnlye = payload;
        },
        setContent(payload) {
            this.getContent = payload;
        },
        async changePass(payload) {
            const response = await this.$axios({
                url: this.changePass.url,
                method: this.changePass.method,
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
                data: payload,
            });
            return response;
        },
        async GetRole(payload) {
            const data = [
                {
                    id: 1,
                    pageName: 'Trang chủ',
                    pageUrl: '/',
                    pageIcon: 'mdi-home',
                    parentId: 0,
                    menuIndex: 1,
                    level: 0,
                    pageType: 0,
                    redirectType: null,
                    roles: '10',
                    showOnMobile: 1,
                    showOnTablet: 1,
                    isOpen: null,
                },
            ];

            try {
                const response = await this.$getRoleByUser(payload);
                const errorCode = response.data.error.code;

                if (errorCode === APIs.responses.OK.code) {
                    this.setRole(response.data.data.pageRoles);

                    const listRoles = response.data.data.pageRoles.map(role => role.roles);
                    const str = ',' + listRoles.join(',') + ',';
                    Cookies.set('strRoles', str);
                } else if (APIs.responses[errorCode]) {
                    this.$showError(this.$router.app, APIs.responses[errorCode].message);
                } else {
                    const errorMsg = response.data.error.message;
                    this.$showError(this.$router.app, 'Đã xảy ra lỗi khi lấy thông tin quyền truy cập. ' + errorMsg);
                }
            } catch (e) {
                console.error(e);
            }
        },
    },

    getters: {},
});


