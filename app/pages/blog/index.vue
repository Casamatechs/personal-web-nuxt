<script setup lang="ts">
import { format } from 'date-fns';
import { CalendarIcon } from '@heroicons/vue/24/solid';
const { data: navigation } = await useAsyncData('blog', () =>
  queryCollection('blog').order('date', 'DESC').all()
);
</script>

<template>
  <div
    class="min-h-[100svh] w-full bg-slate-100 px-10 py-12 text-black dark:bg-gray-800 dark:text-white lg:mx-auto lg:max-w-4xl"
  >
    <div class="flex flex-col items-center justify-center gap-10">
      <NuxtLink
        v-for="post in navigation"
        :key="post.title"
        class="flex h-fit min-h-[12rem] w-full flex-col gap-2 rounded-lg bg-gray-50 p-4 text-black transition-colors hover:bg-slate-200 hover:text-black hover:no-underline dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
        :to="post.path"
      >
        <h2 class="text-3xl">{{ post.title }}</h2>
        <p class="multiline-ellipsis text-sm">{{ post.description }}</p>
        <div class="mt-auto flex gap-1">
          <CalendarIcon class="my-auto aspect-square h-5" />
          <p>{{ format(new Date(post.date), 'MMMM dd, yyyy') }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
/* https://codefrontend.com/css-ellipsis/ */
.multiline-ellipsis {
  overflow: hidden;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
  word-break: keep-all;
}
</style>
