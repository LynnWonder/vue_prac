module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-empty-pattern': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'vue/require-component-is': 'warn',
  },

  parserOptions: {
    // sourceType: 'script',
    sourceType: 'module',
    // parser: 'babel-eslint',
  },

  overrides: [],
}
