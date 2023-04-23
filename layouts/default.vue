<template>
    <div>
        <header id="header">
            <nav class="flex justify-between w-full max-w-xl font-sans border border-primary-800 rounded-full py-3 px-4">
                <div>
                    <NuxtLink v-for="item in routes" class="nuxt-nav-link" :to="{ path: item.path, hash: item.anchor }"
                        :external="item.external">
                        {{ item.name }}
                    </NuxtLink>
                </div>
                <div>
                    <button class="mr-4">Sign in</button>
                    <button>Sign up</button>
                </div>
            </nav>
        </header>
        <main id="main">
            <slot />
        </main>
        <footer>
            footer.
        </footer>
    </div>
</template>
<script setup>
const routes = ref([
    {
        path: '/',
        name: 'Home',
        anchor: '',
        external: false
    },
    {
        path: '/',
        name: 'About',
        anchor: '#about',
        external: true
    },
    {
        path: '/',
        name: 'So gehts',
        anchor: '#sogehts',
        external: true
    },
    {
        path: '/app',
        name: 'App',
        anchor: '',
        external: false
    },
    {
        path: '/faq',
        name: 'FAQ',
        anchor: '',
        external: false
    }
]);

</script>
<style>
.router-link-active {
    color: #00c58e !important;
}

.nuxt-nav-link {
    @apply mr-4 text-sm text-primary-800 transition-all duration-200 ease-in-out;
}

.nuxt-nav-link:hover {
    @apply text-sm text-primary-950
}
</style>