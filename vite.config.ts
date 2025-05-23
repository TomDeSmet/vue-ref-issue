import { fileURLToPath, URL } from "node:url";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    nodeResolve(),
    vue(),
    dts({
      // Output all d.ts files to a single index.d.ts file
      rollupTypes: true,
      outDir: "dist/types",
      include: ["src/**/*.ts", "src/components/**/*.vue"],
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: fileURLToPath(new URL("./src/main.ts", import.meta.url)),
      formats: ["es"],
    },
  },
});
