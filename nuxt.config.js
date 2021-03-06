export default {
  target: 'static',
  router: {
    base: process.env.NODE_ENV !== "development" ? "/portfolio-nuxt/" : "/"
  },

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Muvbed. Васильев Александр. Frontend-разработчик.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Muvbed. Васильев Александр. Frontend-разработчик. Сайт-портфолио для ознакомления с навыками и выполненными работами."
      },
      {
        name: "keywords",
        content:
          "Muvbed, разработка сайтов muvbed, frontend-developer muvbed, фронтенд-разработчик muvbed"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
    script: [
      {
        innerHTML: `
          var testStr = 'Portfolio created on Nuxt.js :)';
          console.log(testStr);
        `
      }
    ],
    __dangerouslyDisableSanitizers: ["script"]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: "~assets/styles/main", lang: "stylus" }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~plugins/ancScroller", "~plugins/scrollClassAdd"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/svg-sprite"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  svgSprite: {
    input: "~/assets/images/svg",
    output: "~/assets/images/svg/sprite"
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.(mp3|cur)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          esModule: false
        }
      });
    }
  }
};
