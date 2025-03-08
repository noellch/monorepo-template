import process from "node:process";

import glob from "fast-glob";

const isFormat = process.env["TYPE"] === "format";
const tsExtensions = ["js", "jsx", "ts", "tsx"];

const pkgs = glob.sync("packages/*", {
  absolute: false,
  onlyDirectories: true,
});

/**
 * @type {import('lint-staged').Config}
 */
const config = isFormat
  ? {
      "**/*.css": [() => ["pnpm run lint:style"]],
      [`**/*.{${tsExtensions.join(",")}}`]: [() => ["pnpm run lint:es", "pnpm run lint:prettier"]],
      "**/*.json": [() => ["pnpm run sort:json"]],
      "**/package.json": [() => ["pnpm run sort:package"]],
    }
  : {
      "**/*": [() => ["pnpm run lint:cspell"]],
      ...Object.fromEntries(
        pkgs.flatMap((pkg) => {
          return [
            [`${pkg}/*.config.{js,ts}`, () => `pnpm exec tsc -p ${pkg}`],
            [`${pkg}/{src,app}/**/*.{${tsExtensions.join(",")}}`, () => `pnpm exec tsc -p ${pkg}`],
          ];
        })
      ),
    };

export default config;
