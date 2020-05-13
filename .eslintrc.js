module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 'off',
    'no-empty-pattern': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'vue/require-component-is': 'warn',
  },

  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },

  overrides: [],
}
