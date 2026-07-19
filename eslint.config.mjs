import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  prettier,

  globalIgnores([
    "dist/**",
    "node_modules/**",
    "build/**",
    "out/**",
    ".next/**",
    "next-env.d.ts",
  ]),
]);
