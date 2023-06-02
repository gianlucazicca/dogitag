import { defineStore } from "pinia";
import { Database } from "~/types/supabase";
export const useDogStore = defineStore("DogStore", {
    state: () => ({ dogs: null }),
    getters: {},
    actions: {
        async fetchDogs(user_id: string) {
            const client = useSupabaseClient<Database>();
            const { data, error } = await client.from('dogs').select('*').eq('dog_owner', user_id)
            console.log(data, error)
            if (error) return error
            else return data
        },
        async createDog(dogName: string, user_id: string) {
            const client = useSupabaseClient<Database>();
            const { data, error } = await client
                .from('dogs')
                .insert(
                    { dog_profile: { name: dogName }, dog_owner: user_id },
                )
        },
        async updateDogProfile(newDogName: string, dog_id: string) {
            const client = useSupabaseClient<Database>();
            const { data, error } = await client
                .from('dogs')
                .update({ dog_profile: { name: newDogName } })
                .eq('id', dog_id)
                .select()

            console.log(data, error)
        },
        async deleteDog(dog_id: string) {
            const client = useSupabaseClient<Database>();
            const { data, error } = await client
                .from('dogs')
                .delete()
                .eq('id', dog_id)

            console.log(data, error)
        },
    },
});