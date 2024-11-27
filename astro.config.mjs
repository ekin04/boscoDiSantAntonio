// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import { baseUrl } from "./config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), sitemap({
    filter: (page) =>
      page !== baseUrl + "/cookie_policy/" && page !== baseUrl + "privacy_policy/",
  }), partytown(), react()],
  site: baseUrl,
  output: "static",
  redirects: { '/digital': '/digital/index.html' },
  adapter: vercel(),
});