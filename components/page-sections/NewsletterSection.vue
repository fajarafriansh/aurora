<template>
  <section class="bg-light dark:bg-dark mt-16 py-12">
    <div class="container mx-auto">
      <div class="max-w-screen-md mx-auto">
        <div class="flex flex-col md:flex-row">
          <div class="flex-1">
            <h2 class="h2">
              Don't miss out anything about
              <span
                class="text-primary-2 dark:text-primary-1 text-2xl lg:text-3xl"
                >Civil Engineering</span
              ><span>, your favourite topic.</span>
            </h2>
            <p class="mt-6">
              Subscribe to receive all the articles we publish in a concise
              format, perfect for busy engineers.
            </p>
            <p class="text-sm mt-4">
              We will protect your data in accordance with our
              <link-primary to="/kebijakan-privasi">
                privacy policy
              </link-primary>
            </p>
          </div>
          <Newsletter />
        </div>
      </div>
    </div>
  </section>
</template>
