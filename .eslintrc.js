module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    parser: "babel-eslint",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier/react",
    ],
    parserOptions: {
        useJSXTextNode: true,
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            modules: true,
            jsx: true
        },
    },
    plugins: [
        "babel",
        "sort-imports-es6-autofix",
        "prettier",
        "react-hooks",
        "react",
        "unused-imports",
    ],
    rules: {
        "no-duplicate-imports": 2,
        'prettier/prettier': [
            'error',
            {
                jsxBracketSameLine: true,
                printWidth: 50,
                singleQuote: true,
                trailingComma: 'es5',
                tabWidth: 4,
            },
            { usePrettierrc: false },
        ],
        'sort-imports-es6-autofix/sort-imports-es6': [
            2,
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        "prefer-template": "error",
        "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
        "indent": ["error", 4],
        "no-undefined": "error",
        "react/jsx-no-undef": 2,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "unused-imports/no-unused-vars": [
            "warn",
            { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
        ],
    },
    settings: {
        react: { version: "detect" },
    },
};
