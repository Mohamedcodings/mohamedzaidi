import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mohamedzaidi.com",
  output: "static",
  trailingSlash: "never",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 650
    }
  }
});
