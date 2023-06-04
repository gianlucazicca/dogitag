import { useAuthStore } from "~/store/AuthStore";
import { storeToRefs } from "pinia";
export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log('auth middleware running...')
    const authStore = useAuthStore();
    const { currentSession, authUser, isLoggedIn } = storeToRefs(authStore)

    const user = useSupabaseUser()
    const client = useSupabaseClient()
    if (!isLoggedIn.value) {
        const { data: { session } } = await client.auth.getSession();
        if (session) {
            authStore.setCurrentSession(session)
            authStore.setAuthUser(user.value)
        }
    }

    if (to.fullPath !== '/app/login' && !user.value) return navigateTo('/app/login')
    if (to.fullPath === '/app/login' && user.value) return navigateTo({ name: 'app-dashboard-user_id', params: { user_id: user.value.id as string } })
})