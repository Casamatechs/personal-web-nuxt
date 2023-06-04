<template>
  <header
    class="sticky top-0 z-50 h-20 w-screen flex-shrink-0 bg-slate-400/50 backdrop-blur-md lg:h-screen lg:w-80"
  >
    <nav
      class="flex h-full w-full flex-row items-center justify-center gap-10 lg:flex-col"
    >
      <div>
        <NuxtLink to="/">Home</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </div>
    </nav>
  </header>
</template>
