import { defineConfig } from 'astro/config'
import { presetUno, presetIcons, presetAttributify } from 'unocss'
import UnoCSS from '@unocss/astro'
import solidJs from '@astrojs/solid-js'
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  integrations: [
    solidJs(),
    UnoCSS({
      presets: [
        presetUno(),
        presetIcons(),
        presetAttributify({
          prefix: 'u-',
          prefixedOnly: true,
          nonValuedAttribute: true,
          trueToNonValued: true,
        }),
      ],
    }),
  ],
  output: 'server',
  adapter: cloudflare(),
})
