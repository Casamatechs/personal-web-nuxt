<template>
  <header
    class="sticky top-0 z-50 h-20 w-screen flex-shrink-0 bg-gray-800/50 backdrop-blur-md lg:h-screen lg:w-80"
  >
    <nav
      class="flex h-full w-full flex-row items-center justify-center gap-10 lg:flex-col lg:justify-normal lg:px-4 lg:py-20"
    >
      <div v-for="nav in navigation" :key="nav.name">
        <NuxtLink
          :to="nav.href"
          :class="[
            activeLink === nav.href
              ? 'bg-gray-900 text-white hover:text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'flex items-center gap-3 rounded-xl px-3 py-3 text-lg/none font-medium transition-colors',
          ]"
          :aria-current="activeLink === nav.href ? 'page' : undefined"
        >
          <component :is="nav.icon" class="h-6 w-6" />
          {{ nav.name }}</NuxtLink
        >
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { HomeIcon, DocumentTextIcon } from '@heroicons/vue/24/outline';
const route = useRoute();
const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
];

const activeLink = computed(() => {
  if (route.path === '/') return route.path;
  else return '/blog';
});
</script>
