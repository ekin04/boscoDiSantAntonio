// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import { site_url } from "./src/const";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      filter: (page) =>
        page !== { site_url } + "/cookie_policy/" &&
        page !== { site_url } + "/privacy_policy/",
    }),
    partytown(),
  ],
  site: site_url,
  output: "hybrid",
  adapter: vercel(),
});
