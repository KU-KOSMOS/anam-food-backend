module.exports = {
    env: {
        node: true,
    },
    extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'prettier/prettier': 'error',
        'import/extensions': 'never',
    },
    overrides: [
        {
            files: ['**/*.spec.ts'],
            rules: {
                'no-undef': 'off',
            },
        },
    ],
};
