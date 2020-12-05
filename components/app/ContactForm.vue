<template>
  <form
    name="contact"
    method="post"
    netlify
    data-netlify-honeypot="bot-field"
    class="pb-1 w-full mt-10"
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
    <label class="block text-grayscale-5 dark:text-grayscale-4 mt-4">
      <span class="block font-medium">Subject</span>
      <input
        type="text"
        name="subject"
        required="required"
        class="appearance-none block w-full bg-grayscale-1 dark:bg-grayscale-2 text-grayscale-5 border-current border-2 rounded-md placeholder-current focus:border-primary-2 focus:outline-none px-4 py-2 mt-2"
      />
    </label>
    <label class="block text-grayscale-5 dark:text-grayscale-4 mt-4">
      <span class="block font-medium">Message</span>
      <textarea
        name="subject"
        required="required"
        class="appearance-none block w-full bg-grayscale-1 dark:bg-grayscale-2 text-grayscale-5 border-current border-2 rounded-md placeholder-current focus:border-primary-2 focus:outline-none px-4 py-2 mt-2"
        row="8"
      >
      </textarea>
    </label>
    <button-primary type="submit" class="mt-6 mx-auto w-full">
      Send
    </button-primary>
  </form>
</template>
