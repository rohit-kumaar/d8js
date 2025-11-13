import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/angular.ts"],
  format: ["esm", "cjs"],
  dts: { resolve: true },
  clean: true,
  minify: true,
  sourcemap: true,
  outExtension({ format }) {
    return {
      js: format === "esm" ? ".mjs" : ".js",
      dts: ".d.ts",
    };
  },
});
