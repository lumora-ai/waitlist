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
      ogImage: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202310/untitled_design_93-sixteen_nine.jpg?size=948:533',
      title: 'Lumora - Never lose a great idea again.',
      description: 'Lumora organizes all of your thoughts into a searchable knowledge base, with an AI assistant to help connect ideas.',
      ogDescription: 'Lumora organizes all of your thoughts into a searchable knowledge base, with an AI assistant to help connect ideas.'
    }
})
