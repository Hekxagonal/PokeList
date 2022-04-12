module.exports = {
  "stories": [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react"
}
