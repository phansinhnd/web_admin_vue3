import moment from 'moment'
import Cookies from 'js-cookie'

const state = () => {
    return {
        path: null,
    }
}
const mutations = {
    setReturnPath(state, payload) {
        state.path = payload
    },
}
const actions = {
    nuxtServerInit(store, context) {
        if (context.route.query.token) {
            store.commit('AppBase/setToken', context.route.query.token)
        }
        let date = []
        if (Number(moment().format('MM')) > 3) {
            date = [
                moment().startOf('year').format('YYYY-MM-DD'),
                moment().format('YYYY-MM-DD'),
            ]
        } else {
            date = [
                moment().startOf('year').subtract(1, 'years').format('YYYY-MM-DD'),
                moment().format('YYYY-MM-DD'),
            ]
        }
        store.commit('app/setDateTimeDashboard', date)
    },
}
export default {
    state,
    mutations,
    actions,
}
