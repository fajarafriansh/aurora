export const createSEOMeta = (data) => [
  {
    hid: 'og:title',
    property: 'og:title',
    content: data.title
  },
  {
    hid: 'description',
    name: 'description',
    content: data.description
  },
  {
    hid: 'og:description',
    property: 'og:description',
    content: data.description,
  },
  {
    hid: 'og:url',
    property: 'og:url',
    content: process.env.HOST_NAME + '/' + data.url,
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content: data.image
  },
  {
    hid: 'og:image:secure_url',
    property: 'og:image:secure_url',
    content: data.image
  },
  {
    hid: 'og:image:alt',
    property: 'og:image:alt',
    content: data.title
  },
  {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: data.cardType || 'summary_large_image',
  },
  {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: data.image
  }
]
