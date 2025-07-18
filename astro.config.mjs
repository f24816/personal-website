import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import vercel from '@astrojs/vercel';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://f24816.vercel.app/",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [tailwind({
    // Disable injecting a basic `base.css` import on every page.
    applyBaseStyles: false
  }), pagefind(), robotsTxt()],
});