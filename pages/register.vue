<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const client = useSupabaseClient()
const email = ref('')
const password = ref('')
const passwordRepeat = ref('')

console.log(client)
const handleSignUp = async () => {
    let {data, error} = await client.auth.signUp({
        email: email.value,
        password: password.value,
    });
    console.log(data, error)
} 
</script>

<template>
    <div>
        <h1>Register</h1>
        <div class="flex flex-col max-w-lg m-auto">
            <input v-model="email" placeholder="E-Mail" type="text" />
            <input v-model="password" placeholder="Password" type="password" />
            <input v-model="passwordRepeat" placeholder="Password wiederholen" type="password" />
            <button @click="handleSignUp">Registrieren</button>
        </div>
    </div>
</template>