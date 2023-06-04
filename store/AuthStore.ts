import { defineStore } from 'pinia'

interface IAuthUser {
    id: string
}
interface ICurrentSession {
    user: { id: string }
}

export const useAuthStore = defineStore('AuthStore', {
    state: () => ({ authUser: null as IAuthUser | null, currentSession: null as ICurrentSession | null }),
    getters: {
        isLoggedIn: (state) => state.authUser?.id === state.currentSession?.user?.id,
    },
    actions: {
        setAuthUser(user: any | null) {
            this.authUser = user
        },
        setCurrentSession(session: any | null) {
            this.currentSession = session
        },

        resetAuthStore() {
            this.authUser = null
            this.currentSession = null
        },
    }
})