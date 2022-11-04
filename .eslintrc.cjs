module.exports = {
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
    ],
    overrides: [],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: "@typescript-eslint/parser"
    },
    plugins: ["vue", "@typescript-eslint"],
    rules: {
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "@typescript-eslint/ban-types": [
            "error",
            {
                extendDefaults: true,
                types: {
                    "{}": false,
                },
            },
        ],
    },
};
