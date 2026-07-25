import { fileURLToPath, URL } from "node:url";
import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanStackStartVite } from "@tanstack/start-plugin-core/vite";

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
    tanStackStartVite(
      {
        framework: "react",
        providerEnvironmentName: "ssr",
        ssrIsProvider: true,
        ssrResolverStrategy: { type: "default" },
        defaultEntryPaths: {
          client: "src/client.tsx",
          server: "src/server.ts",
          start: "src/start.ts",
        },
      },
      {},
    ),
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
