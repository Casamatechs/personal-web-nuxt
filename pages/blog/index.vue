<script setup lang="ts">
const { data: navigation } = await useAsyncData('blog', () =>
  queryContent().find()
);
</script>

<template>
  <div class="min-h-[100svh] w-full px-10 py-10">
    <div class="flex flex-col items-center justify-center gap-10">
      <NuxtLink
        v-for="post in navigation"
        :key="post.title"
        class="h-40 w-80 bg-slate-400 hover:cursor-pointer hover:underline"
        :to="post._path"
      >
        <h2>{{ post.title }}</h2>
      </NuxtLink>
      <div
        v-for="num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        :key="num"
        class="h-40 w-80 bg-slate-400 hover:cursor-pointer hover:underline"
      ></div>
    </div>
  </div>
</template>
