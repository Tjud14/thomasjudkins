// prettier.config.js
/** @type {import("prettier").Config} */
const config = {
    printWidth: 80,
    tabWidth: 2,
    semi: false,
    singleQuote: true,
    overrides: [
      {
        files: "*.html",
        options: {
          parser: "go-template",
          goTemplateBracketSpacing: true
        }
      }
    ],
    plugins: [
      "prettier-plugin-go-template",
      "prettier-plugin-tailwindcss"
    ]
  }
  
  module.exports = config