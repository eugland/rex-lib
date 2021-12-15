module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    '../libs/one-ui/src/**/*.stories.mdx',
    '../libs/one-ui/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  }
}