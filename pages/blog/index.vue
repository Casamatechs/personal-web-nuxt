<script setup lang="ts">
const { data: navigation } = await useAsyncData('blog', () =>
  queryContent().find()
);
</script>

<template>
  <div class="min-h-[100svh] w-full px-10 py-12 lg:mx-auto lg:max-w-4xl">
    <div class="flex flex-col items-center justify-center gap-10">
      <NuxtLink
        v-for="post in navigation"
        :key="post.title"
        class="h-40 w-full bg-slate-400 hover:cursor-pointer hover:underline"
        :to="post._path"
      >
        <h2>{{ post.title }}</h2>
      </NuxtLink>
    </div>
  </div>
</template>
