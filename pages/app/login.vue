<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: "auth",
});
import { useUserStore } from '~/store/UserStore';

const userStore = useUserStore();
const router = useRouter();
const client = useSupabaseClient();
const email = ref('');
const password = ref('');

console.log(client)
const handleSignIn = async () => {
    let {data, error} = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (error) {
    console.log(error)
  } else {
    console.log(data)
    await userStore.fetchUserProfile(data?.user?.id as string);
    router.push({ name: 'app-dashboard-user_id', params: { user_id: data?.user?.id } })
  }
} 
</script>

<template>
    <div>
        <h1>Login</h1>
        <div class="flex flex-col max-w-lg m-auto">
            <input v-model="email" placeholder="E-Mail" type="text" />
            <input v-model="password" placeholder="Password" type="password" />
            <button @click="handleSignIn">Login</button>
        </div>
    </div>
</template>