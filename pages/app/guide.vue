<template>
    <input type="text" placeholder="Vorname" v-model="firstName" />
    <input type="text" placeholder="Nachname" v-model="lastName" />
</template>
<script setup lang="ts">
definePageMeta({
  layout: "app-layout",
});
const firstName = ref('');
const lastName = ref('');
</script>