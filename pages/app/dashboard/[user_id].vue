<template>
  user_id: {{ $route.params.user_id }}
  {{ dogs }}
  <br />
  <button @click="handleFetchUserDogs">Fetch Dogs</button>
  <br />
  {{ profile }}
  <button @click="handleSignOut">SignOut</button>
  <br />
  <input v-model="dogName" placeholder="Dog name" type="text" />
  <button @click="handleAddDog">Add Dog</button>
  <br />
  <input v-model="newDogName" placeholder="New dog name" type="text" />
  <button @click="handleUpdateDog">Update Dog</button>
  <br />
  <input v-model="dogId" placeholder="Delete Dog Id" type="text" />
  <button @click="handleDeleteDog">Delete Dog</button>
  <br />
</template>
<script setup lang="ts">
definePageMeta({
  layout: "app-layout",
  middleware: "auth",
});
import { useUserStore } from '~/store/UserStore';
import { useDogStore } from '~/store/DogStore';
const route = useRoute();
const userStore = useUserStore();
const dogStore = useDogStore();
const client = useSupabaseClient();
const user = useSupabaseUser();
const profile = ref(null);
const dogName = ref('');
const dogs: any = ref([]);
const newDogName = ref('');
const dogId = ref('');
if (route?.params?.user_id) profile.value = await userStore.fetchUserProfile(route?.params?.user_id as string) as any;
const handleSignOut = async () => {
  await client.auth.signOut();
};

const handleFetchUserDogs = async () => {
  dogs.value = await dogStore.fetchDogs(route?.params?.user_id as string);
}

const handleAddDog = async () => {
  console.log(await dogStore.createDog(dogName.value, route?.params?.user_id as string));
};

const handleUpdateDog = async () => {
  console.log(await dogStore.updateDogProfile(newDogName.value, '366461f4-d2e2-4107-89c5-8687f7fdf7db'));
};

const handleDeleteDog = async () => {
  console.log(await dogStore.deleteDog(dogId.value));
};
</script>