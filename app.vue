<template>
  <main class="flex min-h-screen flex-col gap-8 p-12 sm:p-24">
    <section id="header" class="flex w-full flex-col items-center">
      <Header />
    </section>
    <section id="about-me" class="flex flex-col gap-4">
      <h1 class="font-sans text-4xl font-bold">About me</h1>
      <p class="font-serif text-lg">
        I am a computer engineer currently working on fullstack applications
        builts with the Next.js framework. I am specially interested in the the
        latest advances made with React Server Components and how they can be
        used to build better web applications both from a user experience and a
        performance point of view.
      </p>
      <p class="font-serif text-lg">
        I am always looking to get involved in new projects and learn new
        things. If you want to get in touch with me, you can schedule a call me
        at <a href="https://cal.com/carlos-sanchez-marin-4a4jrn"> Cal.com</a>,
        or send me an <a href="mailto:carlos@sanchez.kr">email</a>.
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
      <Footer />
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
