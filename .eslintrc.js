module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  ignorePatterns: ["plugins"],
  rules: {
    semi: 0,
    quotes: 0,
    "space-before-function-paren": 0,
    "arrow-parens": 0,
    "no-new": 0,
    "no-console": 0,
    "vue/html-indent": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/no-v-html": 0,
    "vue/html-self-closing": 0,
    "vue/max-attributes-per-line": 0
  }
};
