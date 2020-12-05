import Vue from 'vue'

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toLocaleDateString(['en-US'], {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })
})

Vue.filter('truncate', (value, length) => {
    if (value.length > length) {
        return value.substring(0, (length - 3)) + '...'
    }
    return value
})
