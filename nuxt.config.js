// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-swiper",
    "nuxt-lazy-load",
  ],
  swiper: {},
  extends: [
    'nuxt-seo-kit'
  ],
  runtimeConfig: {
    public: {
      apiEndpoint: process.env.API_ENDPOINT,
      apiServerEndpoint: process.env.API_SERVER_ENDPOINT,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://furnidesign.co',
      siteName: 'Furni Design',
      siteDescription: 'Furni Design',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    }
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["@/assets/style/global.css"],
  app: {
    head: {
      titleTemplate: '%pageTitle %titleSeparator %siteName'
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  lazyLoad: {
    // These are the default values
    images: false,
    videos: false,
    audios: true,
    iframes: false,
    native: false,
    directiveOnly: true,
    // To remove class set value to false
    loadingClass: "isLoading",
    loadedClass: "isLoaded",
    appendClass: "lazyLoad",
    observerConfig: {
      rootMargin: "80px",
    }
  },
});
