import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    rules: {
      "no-console": "warn",
      "consistent-return": "error",
      indent: ["off", 4],
      quotes: ["warn", "double"],
      semi: ["error", "always"],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
