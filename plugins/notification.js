// // plugins/vue-toastification.js
// // import { defineNuxtPlugin } from '#app'
// // import Toast from 'vue-toastification'
// // import 'vue-toastification/dist/index.css'
// //
// // export default defineNuxtPlugin(nuxtApp => {
// //     nuxtApp.vueApp.use(Toast, {
// //         position: 'top-right',
// //         timeout: 5000,
// //     })
// // })
//
//
// import APIs from '~/assets/configurations/API_Config'
// import uniqid from 'uniqid'
// import Cookies from 'js-cookie'
//
// // Inject APIs
// export default (context, inject) => {
//     const channel = APIs.channel
//     // context.app.$axios.setHeader('token_key', Cookies.get('token'))
//     // LOGIN
//     inject('login', async ({ userName, password }) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.login.url,
//             method: APIs.login.method,
//
//             data: {
//                 channel,
//                 transid,
//                 userName,
//                 password,
//             },
//         })
//         return response
//     })
//
//     inject('getRoleByUser', async (payload) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.getRoleByUser.url,
//             method: APIs.getRoleByUser.method,
//             headers: {
//                 Authorization:
//                     Cookies.get('token') != (null || undefined)
//                         ? `Bearer ${Cookies.get('token')}`
//                         : '',
//             },
//             params: {
//                 channel,
//                 transid,
//                 ...payload,
//             },
//         })
//         return response
//     })
//
//     // getListSchedule
//     inject('getListSchedule', async () => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.getListSchedule.url,
//             method: APIs.getListSchedule.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//         })
//         return response
//     })
//
//     // getListGroupUsers
//     inject('getListGroupUsers', async () => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.getListGroupUsers.url,
//             method: APIs.getListGroupUsers.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//         })
//         return response
//     })
//
//     // GET LIST USER
//     inject('getListUsers', async (pageIndex, pageSize) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.getListUsers.url,
//             method: APIs.getListUsers.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             params: {
//                 pageIndex: pageIndex,
//                 pageSize: pageSize,
//             },
//         })
//         return response
//     })
//
//     inject('getUser', async (user_id) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.getUser.url,
//             method: APIs.getUser.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             params: {
//                 user_id: user_id,
//             },
//         })
//         return response
//     })
//
//     // UPDATE USER
//     inject('updateUser', async (item) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.updateUser.url,
//             method: APIs.updateUser.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             data: {
//                 user_id: item.user_id,
//                 full_name: item.full_name, // item.full_name- errro
//                 birthday: item.birthday,
//                 email: item.email,
//                 phone_int: item.phone_number,
//                 mobile_int: item.mobile_number, //item.mobile_number,//khong dc de trong
//                 sex: item.sex,
//                 address: item.address,
//                 unit: item.unit,
//                 status: parseInt(item.status),
//                 list_group: item.list_group,
//                 update_by: Cookies.get('username'),
//                 schedule_id: item.schedule_id,
//             },
//         })
//         return response
//     })
//
//     inject('addUser', async (item) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.addUser.url,
//             method: APIs.addUser.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             data: {
//                 channel,
//                 transid,
//                 user_name: item.user_name,
//                 password: item.password,
//                 full_name: item.full_name, // item.full_name- errro
//                 birthday: item.birthday,
//                 email: item.email,
//                 phone_int: item.phone_number,
//                 mobile_int: item.mobile_number, //item.mobile_number,//khong dc de trong
//                 sex: item.sex,
//                 address: item.address,
//                 unit: item.unit,
//                 status: parseInt(item.status),
//                 list_group: item.list_group,
//                 create_by: Cookies.get('username'),
//                 schedule_id: item.schedule_id,
//             },
//         })
//         return response
//     })
//
//     // POST USER RESET PASS
//     inject('resetUserPass', async (item) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.resetUserPass.url,
//             method: APIs.resetUserPass.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             data: {
//                 channel,
//                 transid,
//                 user_id: item.user_id,
//             },
//         })
//         return response
//     })
//
//     inject('deleteGroupUser', async (item_id) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.deleteGroupUser.url,
//             method: APIs.deleteGroupUser.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             params: {
//                 channel,
//                 transid,
//                 groupId: item_id,
//             },
//         })
//         return response
//     })
//
//     inject('deleteUser', async (item_id) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.deleteUser.url,
//             method: APIs.deleteUser.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             data: {
//                 channel,
//                 transid,
//                 user_id: item_id,
//             },
//         })
//         return response
//     })
//
//     inject('getListPages', async () => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.getListPages.url,
//             method: APIs.getListPages.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             params: {
//                 channel,
//                 transid,
//             },
//         })
//         return response
//     })
//
//     inject('getGroupUser', async (group_id) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.getGroupUser.url,
//             method: APIs.getGroupUser.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             params: {
//                 channel,
//                 transid,
//                 groupId: group_id,
//             },
//         })
//         return response
//     })
//
//     inject('addGroupUser', async (item) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.addGroupUser.url,
//             method: APIs.addGroupUser.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             data: {
//                 channel,
//                 transid,
//                 group: {
//                     id: null,
//                     groupName: item.group_name,
//                     description: item.description,
//                     status: null,
//                     createTime: null,
//                     createBy: Cookies.get('username'),
//                     updateTime: null,
//                     updateBy: Cookies.get('username'),
//                 },
//                 pageRoles: [],
//                 users: [],
//             },
//         })
//         return response
//     })
//
//     inject('updateGroupUser', async (item) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.updateGroupUser.url,
//             method: APIs.updateGroupUser.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             data: {
//                 channel,
//                 transid,
//                 group: {
//                     id: item.group_id,
//                     groupName: item.group_name,
//                     description: item.description,
//                 },
//                 users: [...context.store.state.groupUsers.listIdUsers],
//                 pageRoles: item.group_page,
//             },
//         })
//         return response
//     })
//
//     inject('checkDeleteGroupUser', async (item_id) => {
//         let transid = uniqid()
//         const response = await context.app.$axios({
//             url: APIs.checkDeleteGroupUser.url,
//             method: APIs.checkDeleteGroupUser.method,
//             headers: {
//                 Authorization: `Bearer ${Cookies.get('token')}`,
//             },
//             data: {
//                 channel,
//                 transid,
//                 groupId: item_id,
//             },
//         })
//         return response
//     })
// }
import APIs from '~/assets/configurations/API_Config'
import Cookies from 'js-cookie'

export default {
    install(app) {
        const channel = APIs.channel

        app.config.globalProperties.$login = async ({ userName, password }) => {
            let transid = uniqid()
            const response = await app.config.globalProperties.$axios({
                url: APIs.login.url,
                method: APIs.login.method,
                data: {
                    channel,
                    transid,
                    userName,
                    password,
                },
            })
            return response
        }

        app.config.globalProperties.$getRoleByUser = async (payload) => {
            let transid = uniqid()
            const response = await app.config.globalProperties.$axios({
                url: APIs.getRoleByUser.url,
                method: APIs.getRoleByUser.method,
                headers: {
                    Authorization: Cookies.get('token') ? `Bearer ${Cookies.get('token')}` : '',
                },
                params: {
                    channel,
                    transid,
                    ...payload,
                },
            })
            return response
        }

        // Similarly refactor the other injections
        // Example for 'getListSchedule':
        app.config.globalProperties.$getListSchedule = async () => {
            let transid = uniqid()
            const response = await app.config.globalProperties.$axios({
                url: APIs.getListSchedule.url,
                method: APIs.getListSchedule.method,
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            })
            return response
        }

        // Add remaining injections like $getListUsers, $updateUser, etc.
    }
}
