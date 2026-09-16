import { fileURLToPath, URL } from "node:url";
import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

function browserAsyncHooksShim(): Plugin {
  return {
    name: "browser-async-hooks-shim",
    enforce: "pre",
    resolveId(source, importer, options) {
      if (!options?.ssr && source === "node:async_hooks") {
        return fileURLToPath(new URL("./src/shims/async-hooks-browser.ts", import.meta.url));
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    browserAsyncHooksShim(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    tsconfigPaths: true,
  },
  optimizeDeps: {
    exclude: [
      "@tanstack/react-start-client",
      "@tanstack/start-client-core",
      "@tanstack/react-start",
    ],
  },
  ssr: {
    noExternal: [
      "@tanstack/react-start-client",
      "@tanstack/start-client-core",
      "@tanstack/react-start",
    ],
  },
});