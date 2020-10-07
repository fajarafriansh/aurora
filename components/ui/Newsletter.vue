<template>
  <div
    id="newsletter"
    class="flex flex-col md:flex-row max-w-screen-md mx-auto"
  >
    <div class="flex-1">
      <h3 class="h3">
        Don't miss out anything about
        <span class="text-green">Vue</span>
        , your favourite framework.
      </h3>
      <p class="text-pickled-4 mt-6">
        Subscribe to receive all the articles we publish in a concise format,
        perfect for busy devs.
      </p>
    </div>
    <form
      id="ml-main-form-0"
      data-code="r8n6b7"
      class="pb-1 mt-10 md:w-1/3 md:mt-0 md:ml-12"
    >
      <label class="block text-pickled-4">
        <span class="block font-medium">Name</span>
        <input
          required="required"
          class="appearance-none block w-full border-current border-3 rounded-lg placeholder-pickled-2 focus:border-violet-5 active:border-violet-5 disabled:border-pickled-1 focus:outline-none px-4 py-2 mt-2"
        />
      </label>
      <label class="block text-pickled-4 mt-6">
        <span class="block font-medium">Email</span>
        <input
          type="email"
          required="required"
          class="appearance-none block w-full border-current border-3 rounded-lg placeholder-pickled-2 focus:border-violet-5 active:border-violet-5 disabled:border-pickled-1 focus:outline-none px-4 py-2 mt-2"
        />
      </label>
      <button
        to=""
        type="submit"
        class="vd-button text-center mt-6 mx-auto md:w-full as-button"
      >
        <span class="flex-1">
          <span aria-hidden="true">🖖</span>
          Subscribe
        </span>
      </button>
    </form>
  </div>
</template>
