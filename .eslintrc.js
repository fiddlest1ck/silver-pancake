module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};

