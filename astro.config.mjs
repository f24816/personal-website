import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import vercel from '@astrojs/vercel/serverless';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
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
  image: {
    // This lets astro:assets work with remote images
    remotePatterns: [{
      protocol: "https"
    }]
  }
});