import unicornPlugin from 'eslint-plugin-unicorn';

export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      unicorn: unicornPlugin,
    },
    rules: {
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-module': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
  },
];