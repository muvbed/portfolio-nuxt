export default {
  namespaced: true,
  state() {
    return {
      skills: [
        {
          name: "HTML 5",
          image: require("~/assets/images/html5.png"),
          animation_delay: 250
        },
        {
          name: "CSS 3",
          image: require("~/assets/images/css3.png"),
          animation_delay: 1100
        },
        {
          name: "Java Script",
          image: require("~/assets/images/javascript.png"),
          animation_delay: 500
        },
        {
          name: "Кроссбраузерная верстка",
          image: require("~/assets/images/crossbrowser.png"),
          animation_delay: 1650
        },
        {
          name: "Адаптивная верстка",
          image: require("~/assets/images/adaptive.png"),
          animation_delay: 1900
        },
        {
          name: "БЭМ",
          image: require("~/assets/images/bem.png"),
          animation_delay: 1250
        },
        {
          name: "jQuery",
          image: require("~/assets/images/jquery.png"),
          animation_delay: 1950
        },
        {
          name: "Vue.js / Nuxt.js",
          image: require("~/assets/images/vuejs.png"),
          animation_delay: 1550
        },
        {
          name: "npm / yarn",
          image: require("~/assets/images/npm.png"),
          animation_delay: 1800
        },
        {
          name: "Gulp",
          image: require("~/assets/images/gulp.png"),
          animation_delay: 1150
        },
        {
          name: "Webpack",
          image: require("~/assets/images/webpack.png"),
          animation_delay: 1400
        },
        {
          name: "Pug (Jade)",
          image: require("~/assets/images/pug.png"),
          animation_delay: 1350
        },
        {
          name: "Less",
          image: require("~/assets/images/less.png"),
          animation_delay: 1500
        },
        {
          name: "Sass",
          image: require("~/assets/images/sass.png"),
          animation_delay: 1700
        },
        {
          name: "Stylus",
          image: require("~/assets/images/stylus.png"),
          animation_delay: 1200
        },
        {
          name: "Git / GitHub",
          image: require("~/assets/images/github.png"),
          animation_delay: 1850
        },
        {
          name: "Adobe Photoshop",
          image: require("~/assets/images/ps.png"),
          animation_delay: 1750
        },
        {
          name: "Figma",
          image: require("~/assets/images/figma.png"),
          animation_delay: 1300
        }
      ]
    };
  }
};
