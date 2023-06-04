import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
    state: () => ({ user: null, profile: null }),
    getters: {},
    actions: {
        async fetchUserProfile(user_id: string) {
            const client = useSupabaseClient();
            const { data, error } = await client.from('profiles').select('*').eq('id', user_id)
            console.log(data, error)
            if (error) return error
            else return data[0]
        },
        resetUserStore() {
            this.user = null;
            this.profile = null;
        },
    },
});