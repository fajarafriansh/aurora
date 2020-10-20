<template>
  <div class="relative label-floating">
    <input
      :type="type"
      required="required"
      class="appearance-none block w-full h-12 bg-light dark:bg-dark focus:bg-grayscale-1 border-2 border-grayscale-4 dark:border-grayscale-5 rounded-md placeholder-current focus:border-primary-2 focus:outline-none px-4 pt-4 pb-1 mt-2"
      placeholder=" "
    />
    <label class="flex items-center absolute inset-0 w-0 text-primary-2 dark:text-primary-1 ml-5">
      Name
    </label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
  }
}
</script>
