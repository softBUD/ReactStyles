module.exports = {
  ignorePatterns: ['public/**/*.js', '.*.js', '*.scss', '*.stories.tsx'],
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
    'testing-library',
    'jest-dom',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: './',
      },
    ],
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-dom-import': 'off',
    'no-param-reassign': 'off', // redux-toolkit immer 관련 설정 끄기
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': ['error', 'static public field'],
    'react/no-array-index-key': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-fragments': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'max-classes-per-file': 'off',
    'linebreak-style': 'off',
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        'react-app',
        'react-app/jest',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
      ],
    },
  ],
}
