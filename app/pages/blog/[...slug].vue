<script setup>
const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first();
});
</script>

<template>
  <main
    class="prose max-w-none bg-slate-100 px-10 py-12 text-black dark:bg-gray-800 dark:text-white lg:mx-auto lg:max-w-4xl"
  >
    <ContentRenderer :value="post" />
  </main>
</template>

<style>
/* Link colors matching home page */
.prose a {
  color: rgb(37, 99, 235);
}

.prose a:hover {
  text-decoration-line: underline;
  color: rgb(30, 64, 175);
}

/* Dark mode link colors */
.dark .prose a {
  color: rgb(96, 165, 250);
}

.dark .prose a:hover {
  color: rgb(147, 197, 253);
}

/* Dark mode prose styling */
.dark .prose {
  color: white;
}

.dark .prose h1,
.dark .prose h2,
.dark .prose h3,
.dark .prose h4,
.dark .prose h5,
.dark .prose h6 {
  color: white;
}

.dark .prose code {
  background-color: rgb(55, 65, 81);
  color: white;
}

.dark .prose pre {
  background-color: rgb(55, 65, 81);
}

.dark .prose blockquote {
  border-left-color: rgb(75, 85, 99);
  color: rgb(209, 213, 219);
}

.dark .prose hr {
  border-color: rgb(75, 85, 99);
}
</style>
