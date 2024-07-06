import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
    site: "https://f24816.vercel.app/",
    integrations: [
        tailwind({
            // Disable injecting a basic `base.css` import on every page.
            applyBaseStyles: false,
        }),
        pagefind()
    ],
});
