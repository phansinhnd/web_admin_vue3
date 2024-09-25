const state = () => ({
    notifications: [],
})
const mutations = {
    set_notifications(state, payload) {
        let notifications = [...state.notifications]
        notifications.unshift(payload)
        state.notifications = [...notifications]
    },
    remove_notification(state, payload) {
        let notifications = [...state.notifications]
        let idx = notifications.indexOf(payload)
        if (idx >= 0) {
            notifications.splice(idx, 1)
            state.notifications = [...notifications]
        }
    },
}

const actions = {
    set_notifications(vueContext, payload) {
        vueContext.commit('set_notifications', payload)
    },
}

export default {
    state,
    mutations,
    actions,
}
