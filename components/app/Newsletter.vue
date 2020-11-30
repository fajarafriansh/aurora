<template>
  <form
    name="newsletter"
    method="post"
    netlify
    data-netlify-honeypot="bot-field"
    class="pb-1 mt-10 md:w-1/3 md:mt-0 md:ml-12"
  >
    <input type="hidden" name="form-name" value="newsletter" />
    <label class="block text-grayscale-5 dark:text-grayscale-4">
      <span class="block font-medium">Name</span>
      <input
        type="text"
        name="name"
        required="required"
        class="appearance-none block w-full bg-grayscale-1 dark:bg-grayscale-2 text-grayscale-5 border-current border-2 rounded-md placeholder-current focus:border-primary-2 focus:outline-none px-4 py-2 mt-2"
      />
    </label>
    <label class="block text-grayscale-5 dark:text-grayscale-4 mt-4">
      <span class="block font-medium">Email</span>
      <input
        type="email"
        name="email"
        required="required"
        class="appearance-none block w-full bg-grayscale-1 dark:bg-grayscale-2 text-grayscale-5 border-current border-2 rounded-md placeholder-current focus:border-primary-2 focus:outline-none px-4 py-2 mt-2"
      />
    </label>
    <button-primary type="submit" class="mt-6 mx-auto md:w-full">
      Subscribe
    </button-primary>
  </form>
</template>
