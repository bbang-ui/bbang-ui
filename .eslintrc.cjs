module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    'simple-import-sort/imports': 'warn', //import 문장의 정렬을 강제하는 규칙
    'simple-import-sort/exports': 'warn', //export 문장의 정렬을 강제하는 규칙
    'import/first': 'warn', //모든 import 문장이 다른 코드 이전에 있어야 함을 요구하는 규칙
    'import/newline-after-import': 'error', //import 문장 다음에는 새 줄이 와야 함
    'import/no-duplicates': 'error', //중복된 import 문장을 방지하는 규칙
    'no-unused-vars': 'off', //사용되지 않는 변수를 허용하지 않는 ESLint의 기본 규칙 off
    'unused-imports/no-unused-imports': 'error', //사용되지 않는 import를 허용하지 않는 규칙입니다
    'unused-imports/no-unused-vars': [
      //사용되지 않는 변수를 허용하지 않는 규칙(특정 패턴(예: _로 시작하는 변수)은 예외로 처리)
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
