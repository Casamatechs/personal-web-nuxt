<script setup lang="ts">
import { format } from 'date-fns';
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
        class="h-40 w-full bg-slate-400 text-black hover:text-black hover:no-underline"
        :to="post._path"
      >
        <h2>{{ post.title }}</h2>
        <p>{{ format(new Date(post.date), 'MMMM dd, yyyy') }}</p>
      </NuxtLink>
    </div>
  </div>
</template>
