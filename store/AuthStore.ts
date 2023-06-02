import { defineStore } from 'pinia'

export const useAuthStore = defineStore('AuthStore', {
    state: () => ({ authUser: null, currentSession: null }),
    getters: {},
    actions: {
        setAuthUser(user: any|null) {
            this.authUser = user
        },
        setCurrentSession(session: any|null) {
            this.currentSession = session
        }
    }
  })