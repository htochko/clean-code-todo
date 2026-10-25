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
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_', // Разрешает неиспользуемые аргументы, начинающиеся с "_"
        },
      ],

      // 2. Детект недостижимого кода (например, код после return/throw/break)
      'no-unreachable': 'error',

      // 3. Детект неиспользованных выражений (например, вызов без присваивания/эффекта)
      'no-unused-expressions': 'error',

      // 4. Поиск неиспользуемых меток (labels)
      'no-unused-labels': 'error',

      // 5. Поиск лишних/бесполезных вызовов и блоков
      'no-lone-blocks': 'error', // Бесполезные изолированные блоки {}
      'no-useless-catch': 'error', // Catch-блоки, которые просто пробрасывают ошибку дальше
      'no-useless-return': 'error', // Избыточные return в конце функций

      // 6. Правила unicorn для чистки мертвого/избыточного кода
      'unicorn/no-unreadable-array-destructuring': 'error',
      'unicorn/no-zero-fractions': 'error',
    },
  },
];
