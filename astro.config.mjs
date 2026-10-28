// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://theforestnetwork.earth',
  // The Village's policies moved under /village. The old addresses are built
  // into released iOS and Android apps and our auth service's consent screen,
  // so keep these redirects.
  redirects: {
    '/privacy': '/village/privacy',
    '/acceptable-use': '/village/terms',
    '/copyright': '/village/copyright',
  },
});
