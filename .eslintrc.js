module.exports = {
    env: {
        es2020: true,
        node: true,
    },
    extends: ['airbnb', 'prettier'],
    globals: {
        expect: 'readonly',
        describe: 'readonly',
        test: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
};
