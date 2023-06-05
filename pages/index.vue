<script setup lang="ts">
useHead({
  title: 'Carlos Sanchez',
  meta: [
    {
      name: 'Carlos Sanchez personal website',
      content:
        'Personal website of Carlos Sanchez, a software engineer based in Seoul, South Korea.',
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
          Lead Software Engineer @&nbsp;
          <a
            class="text-blue-600 hover:text-blue-800 hover:underline"
            href="https://www.onomaai.com"
          >
            Onoma.ai
          </a>
        </p>
      </div>
    </section>
    <section id="about-me" class="flex flex-col gap-4 break-keep">
      <h1 class="font-sans text-4xl font-bold">About me</h1>
      <p class="font-serif text-lg">
        I am a computer engineer currently working on fullstack applications
        built with the Next.js framework. I am especially interested in the the
        latest advances made with React Server Components and how they can be
        used to build better web applications both from a user experience and a
        performance point of view.
      </p>
      <p class="font-serif text-lg">
        During the last 5 years I worked with most of the major web frameworks
        including Angular, Vue and React. As a matter of fact, this website is
        built with Nuxt.js, the Vue.js framework for fullstack applications
        &#x1F609;.
      </p>
      <p class="font-serif text-lg">
        I am always looking to get involved in new projects and learn new
        things. If you want to get in touch with me, you can schedule a call
        with
        <a href="https://cal.com/carlos-sanchez-marin-4a4jrn"> Cal.com</a>, or
        send me an <a href="mailto:carlos@sanchez.kr">email</a>.
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
