import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "scripts/**",
    ],
  },
  {
    rules: {
      // This is a static export meant to open directly via file:// as well as
      // real hosting. next/link's client-side RSC navigation throws under the
      // file: scheme (no fetch support) and falls back to a broken
      // chrome-error page instead of a real navigation — confirmed by testing
      // the exported out/ build directly. Plain <a> tags always do a real
      // browser navigation, which the generic path-rewrite in
      // scripts/fix-static-paths.js turns into a working relative link.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];

export default eslintConfig;
