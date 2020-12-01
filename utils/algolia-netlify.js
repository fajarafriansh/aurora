export const algoliasearchNetlify = (env) => [
  {
    appId: env.appId,
    apiKey: env.apiKey,
    siteId: env.siteId,
    branch: 'master',
    autocomplete: {
      inputSelector: 'input[type=search]',
    },
  },
]
