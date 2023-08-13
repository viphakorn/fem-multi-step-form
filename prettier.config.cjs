/** @type {import('prettier').Config} */
module.exports = {
  pluginSearchDirs: false, // you can omit this when using Prettier version 3
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
  printWidth: 200,
  trailingComma: "es5",
  tabWidth: 2,
  singleAttributePerLine: false,
  semi: false,
};
