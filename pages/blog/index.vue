<script setup lang="ts">
import { format } from 'date-fns';
import { CalendarIcon } from '@heroicons/vue/24/solid';
import { BlogPostMetadata } from '~/types/blog';
const { data: navigation } = await useAsyncData('blog', () =>
  queryContent<BlogPostMetadata>().sort({ date: -1 }).find()
);
</script>

<template>
  <div class="min-h-[100svh] w-full px-10 py-12 lg:mx-auto lg:max-w-4xl">
    <div class="flex flex-col items-center justify-center gap-10">
      <NuxtLink
        v-for="post in navigation"
        :key="post.title"
        class="flex h-44 w-full flex-col gap-2 rounded-lg bg-gray-50 p-4 text-black hover:bg-slate-200 hover:text-black hover:no-underline"
        :to="post._path"
      >
        <h2 class="text-3xl">{{ post.title }}</h2>
        <p class="multiline-ellipsis text-sm">{{ post.description }}</p>
        <div class="mt-auto flex">
          <CalendarIcon class="h-6 w-6" />
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
}
</style>
