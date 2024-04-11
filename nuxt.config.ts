export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "light"
  },
  ui: {
    icons: ["mdi"],
  },
  seoMeta: {
      ogImage: 'og-image.png',
      title: 'Lumora - Never lose a great idea again.',
      description: 'Lumora organizes all of your thoughts into a searchable knowledge base, with an AI assistant to help connect ideas.',
      ogDescription: 'Lumora organizes all of your thoughts into a searchable knowledge base, with an AI assistant to help connect ideas.'
    }
})
