// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "joyhouses.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
