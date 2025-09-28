<script setup lang="ts">
import {
  HomeIcon,
  DocumentTextIcon,
  ChevronDownIcon,
} from '@heroicons/vue/24/outline';

const route = useRoute();
const colorMode = useColorMode();

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
];

const activeLink = computed(() => {
  if (route.path === '/') return route.path;
  else return '/blog';
});

// Dark mode dropdown state
const isDropdownOpen = ref(false);

// Dark mode options
const colorModeOptions = [
  { value: 'system', icon: 'line-md:computer', label: 'System' },
  { value: 'light', icon: 'uil:sun', label: 'Light' },
  { value: 'dark', icon: 'uil:moon', label: 'Dark' },
] as const;

const currentColorMode = computed(() => {
  return (
    colorModeOptions.find((option) => option.value === colorMode.preference) ??
    colorModeOptions[0]
  );
});

const setColorMode = (mode: string) => {
  colorMode.preference = mode;
  isDropdownOpen.value = false;
};

// Close dropdown when clicking outside
const dropdownRef = ref<HTMLElement | null>(null);

const handleClickOutside = (event: Event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <header
    class="sticky top-0 z-50 h-20 w-screen flex-shrink-0 bg-gray-400 backdrop-blur-md lg:h-screen lg:w-80"
  >
    <nav
      class="flex h-full w-full flex-row items-center justify-center gap-10 lg:flex-col lg:justify-normal lg:px-4 lg:py-20"
    >
      <!-- Navigation links - centered on wide screens -->
      <div class="flex flex-row gap-10 lg:flex-col lg:gap-4">
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
      </div>

      <!-- Dark mode selector - dropdown for all screen sizes -->
      <div class="absolute right-0 pr-4 lg:static lg:justify-end lg:pr-0">
        <div ref="dropdownRef" class="relative">
          <button
            class="flex items-center gap-2 rounded-lg bg-gray-700 px-2 py-2 text-white transition-colors hover:bg-gray-600 sm:px-3"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <Icon :name="currentColorMode.icon" class="h-5 w-5 lg:h-6 lg:w-6" />
            <span class="hidden text-sm font-medium sm:inline lg:text-base">{{
              currentColorMode.label
            }}</span>
            <ChevronDownIcon
              :class="[
                'h-4 w-4 transition-transform lg:h-5 lg:w-5',
                isDropdownOpen ? 'rotate-180' : '',
              ]"
            />
          </button>

          <!-- Dropdown menu -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div
              v-if="isDropdownOpen"
              class="absolute right-0 mt-2 w-40 rounded-lg bg-gray-800 shadow-lg ring-1 ring-gray-600 lg:w-44"
            >
              <div class="py-1">
                <button
                  v-for="option in colorModeOptions"
                  :key="option.value"
                  :class="[
                    'flex w-full items-center gap-3 px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white lg:text-base',
                    currentColorMode.value === option.value
                      ? 'bg-gray-700 text-white'
                      : '',
                  ]"
                  @click="setColorMode(option.value)"
                >
                  <Icon :name="option.icon" class="h-4 w-4 lg:h-5 lg:w-5" />
                  {{ option.label }}
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </nav>
  </header>
</template>
