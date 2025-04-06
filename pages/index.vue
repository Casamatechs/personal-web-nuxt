<script setup lang="ts">
useHead({
  title: 'Carlos Sanchez',
  meta: [
    {
      name: 'Carlos Sanchez personal website',
      content:
        'Personal website of Carlos Sanchez, a software engineer based in Gyeonggi-do, South Korea.',
    },
  ],
});
</script>

<template>
  <main
    class="flex min-h-screen flex-col gap-8 px-10 py-12 lg:mx-auto lg:max-w-4xl"
  >
    <section id="header" class="flex w-full flex-col items-center">
      <div>
        <h1 class="text-center text-3xl font-bold sm:text-5xl">
          Carlos Sanchez
        </h1>
        <hr
          class="m-auto my-2 h-1 w-20 rounded border-0 bg-gray-200 dark:bg-gray-700"
        />
        <p class="flex justify-center text-center text-lg sm:text-xl">
          Backend Engineer @&nbsp;
          <a
            class="text-blue-600 hover:text-blue-800 hover:underline"
            href="https://www.remote.com"
          >
            Remote.com
          </a>
        </p>
      </div>
    </section>
    <section id="about-me" class="flex flex-col gap-4 break-keep">
      <h1 class="font-sans text-4xl font-bold">About me</h1>
      <p class="font-serif text-lg">
        I am a computer engineer currently working on Remote's engineering team
        as a Backend Engineer, using Elixir. Previously, I worked as a fullstack
        engineering team lead at Onoma AI, a startup based in Seoul.
      </p>
      <p class="font-serif text-lg">
        Since I started my professional career, I've been working with distributed
        systems. Initially, I focused on high-performance distributed applications
        using Java and the JVM ecosystem. Now, I continue working in this space
        using Elixir, a language specifically designed for building distributed
        and fault-tolerant applications.
      </p>
      <p class="font-serif text-lg">
        At <a href="https://www.remote.com" target="_blank">Remote.com</a>, I'm helping build the leading platform that enables companies
        to seamlessly hire, manage, and pay their global workforce.
      </p>
      <p class="font-serif text-lg">
        If you want to get in touch with me, you can send me an
        <a href="mailto:carlos@sanchez.kr">email</a>.
      </p>
    </section>
    <section id="background" class="flex flex-col gap-4">
      <h1 class="font-sans text-4xl font-bold">Background</h1>
      <p class="font-serif text-lg">
        I did a double master&apos;s majoring in Data Science at Eindhoven
        University of Technology (TU/e) and Madrid Technical University (UPM),
        together with a minor in ICT innovation and entrepreneurship. During my
        bachelor I worked as an intern at the
        <a href="http://lsd.ls.fi.upm.es/">Distributed Systems Laboratory</a>
        and after graduating, I kept working as a full-time researcher. You can
        find more about my background <a href="/CV_Carlos.pdf">here</a>.
      </p>
    </section>
    <section id="footer">
      <AppFooter />
    </section>
  </main>
</template>

<style>
a {
  color: rgb(37, 99, 235);
}

a:hover {
  text-decoration-line: underline;
  color: rgb(30, 64, 175);
}
</style>
