module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'eslint-config-love',
        'plugin:react/recommended',
        'next/core-web-vitals',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        '@typescript-eslint/strict-boolean-expressions': 'warn',
        'react/display-name': 'off',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'warn',
    },
}
