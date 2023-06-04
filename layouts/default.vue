<template>
    <div>
        <header id="header">
            <nav
                class="nav-bg flex justify-between w-full max-w-xl font-sans border border-primary-800 backdrop-blur rounded-full py-3 px-4 mt-4">
                <div>
                    <NuxtLink v-for="item in routes" class="nuxt-nav-link" :to="{ path: item.path, hash: item.anchor }"
                        :external="item.external">
                        {{ item.name }}
                    </NuxtLink>
                </div>
                <div>
                    <button
                        class="mr-2 text-sm border border-primary-900 py-1 px-2 rounded-full hover:bg-primary-900 hover:text-primary-50 transition-all duration-200 ease-linear"
                        @click="$router.push('/app/login')">Sign
                        in</button>
                    <button
                        class="text-sm text-white border border-primary-900 bg-primary-900 py-1 px-2 rounded-full hover:bg-primary-50 hover:text-primary-900 transition-all duration-200 ease-linear">Sign
                        up</button>
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
.nav-bg {
    background: hsla(0, 0%, 100%, .75);
}

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