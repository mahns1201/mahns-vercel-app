import React from 'react';

const AboutPage = () => (
  <main style={{ padding: '2rem' }}>
    <h1 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
      소개
    </h1>
    <p>Welcome to the About page! This is a demo page for mahns.github.io.</p>
    <section>
      <h2>Who am I?</h2>
      <p>
        I am a developer passionate about building web applications with modern
        technologies.
      </p>
    </section>
    <section>
      <h2>Contact</h2>
      <p>
        You can reach me via <a href="mailto:your.email@example.com">email</a>.
      </p>
    </section>
  </main>
);

export default AboutPage;
