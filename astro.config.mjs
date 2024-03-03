import { defineConfig } from 'astro/config';
import { Application } from '@splinetool/runtime';


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});