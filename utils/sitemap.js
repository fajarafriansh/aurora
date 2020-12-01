// const axios = require('axios')

// module.exports = async function getAppRoutes() {
//   // Initiate axios
//   const instance = axios.create({
//     baseURL: 'https://endpoint.com/api',
//     headers: {'Authorization': 'Bearer '+ yourToken}
//   });

//   // Fetch available languages and store their codes (fr, en, ...) in array
//   const availableLanguages = await axios.get('/languages').then(res => res.data.map(language => language.id));

//   // Fetch blogPosts as object with languages as attributes and slugs as their values
//   const blogPosts = fetchBlogPosts();

//   const routes = [];

//   // for every language
//   for (let i = 0; i < availableLanguages.length; i += 1) {
//     // and every route defined in routes.json
//     for (let k = 0; k < appRoutes.length; k += 1) {
//       let routePath = appRoutes[k];
//       const language = availableLanguages[i];

//       // replace the language placeholder with current language
//       routePath = routePath.replace(/:lang/, language);

//       // If the route includes 'blog', iterate over all fetched posts in current language
//       if (routePath.includes('/blog/')) {
//         for (let postIndex = 0; postIndex < blogPosts[language].length; postIndex += 1) {
//           routes.push(routePath.replace(/:title/, blogPosts[language][postIndex]));
//         }
//       }

//       // could add more 'else if' conditions to account for other type of pages (than just blog)

//       // Otherwise it's home page and just push it
//       else {
//         routes.push(routePath);
//       }
//     }
//   }

//   // Return all available routes
//   return routes;
// };

// export const fetchSitemapRoutes = async () => {
//   const routes = []
//   const httpEndpoint: process.env.GRAPHCMS_ENDPOINT
//   const { data: articlesData } = await client.get('cdn/links', {
//     starts_with: 'articles/',
//   })
//   const { data: tagsData } = await client.get('cdn/tags')

//   Object.values(articlesData.links).forEach((article) =>
//     routes.push(`/${article.slug}`)
//   )
//   tagsData.tags.forEach((tag) => routes.push(`/topics/${kebabCase(tag.name)}`))

//   return routes
// }
