import { defineStore } from "pinia";
import { Database, IDog } from "~/types/supabase";
export const useDogStore = defineStore("DogStore", {
    state: () => ({ dogs: [] as Array<IDog> | [] }),
    getters: {},
    actions: {
        setDogs(dogs: Array<IDog> | []) {
            this.dogs = dogs
        },
        setDog(dog: IDog) {
            const idx = this.dogs.findIndex((dog: IDog) => dog.id === dog.id);
            if (idx > -1) this.dogs[idx] = dog;
            else this.dogs.push(dog as never);
        },
        async fetchDogs(user_id: string) {
            const client = useSupabaseClient<Database>();
            const { data, error } = await client.from('dogs').select('*').eq('dog_owner', user_id)
            console.log(data, error)
            if (error) return error
            else return data
        },

        onDeleteDog(dog_id: number) {
            const idx = this.dogs.findIndex((dog: IDog) => dog.id === dog_id);
            if (idx > -1) this.dogs.splice(idx, 1);
        },

        resetDogStore() {
            this.dogs = [];
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