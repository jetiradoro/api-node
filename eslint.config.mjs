import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      semi: ["error", "never"],
    },
  },
  {
    ignores: ["node_modules"],
  },
  pluginJs.configs.recommended,
];
