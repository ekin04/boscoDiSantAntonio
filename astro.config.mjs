// @ts-check
import { defineConfig } from "astro/config";
import { siteConfig } from "./siteConfig";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "static",
  integrations: [
    react(),
    markdoc(),
    keystatic(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  site: siteConfig.site.baseUrl,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "esbuild",
    },
  },
  adapter: vercel({
    isr: true,
  }),
  redirects: {
    "/digital": "/keystatic",
  },
});
