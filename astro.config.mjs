// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import { baseUrl, commitUrl } from "./config";

import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), sitemap({
    customPages: [commitUrl],
    filter: (page) =>
      page !== `${baseUrl}/cookie_policy/` && 
      page !== `${baseUrl}/privacy_policy/`,
  }),
   partytown(), react(), markdoc(),keystatic()],
  
   site: baseUrl,
  output: "hybrid",
  redirects: { '/digital': '/digital/index.html' },
  adapter: vercel(),
});