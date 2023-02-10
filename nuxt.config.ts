// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'takumaru.dev',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'This is takuma-ru\'s self-introduction and portfolio site.' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'takumaru.dev' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://takumaru.dev/' },
        { hid: 'og:title', property: 'og:title', content: 'takumaru homepage' },
        { hid: 'og:description', property: 'og:description', content: 'This is takuma-ru\'s self-introduction and portfolio site.' },
        { hid: 'og:image', property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/takuma-ru-homepage.appspot.com/o/og-image.png?alt=media&token=f47f7aff-ee8f-47d6-b8ce-95795a3dc05f' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://firebasestorage.googleapis.com/v0/b/takuma-ru-homepage.appspot.com/o/og-image.png?alt=media&token=f47f7aff-ee8f-47d6-b8ce-95795a3dc05f' },
        { name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@takumaru_2222' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icons/icon-default.png' },
        { rel: 'mask-icon', color: '#FCFCF9', href: '/icons/icon-default.svg' },
        /* { rel: 'apple-touch-icon', href: '/apple_touch_icon.png', sizes: '180x180' }, */
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap'
        },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,200..700,0..1,0&display=swap'
        },
        {
          rel: 'stylesheet',
          media: 'print',
          onload: 'this.media=\'all\'',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,200..700,0..1,0&display=swap'
        },
        {
          rel: 'manifest',
          'data-n-head': '1',
          'data-h-id': 'manifest',
          href: 'manifest.webmanifest'
        }
      ]
    }
  },

  components: {
    dirs: [
      'components/logos',
      'components/layouts',
      'components/utils'
    ]
  },

  imports: {
    dirs: [
      'composables',
      'composables/**/*.{ts,js,mjs,mts}',
      'composables/**',
      'utils',
      'utils/**/*.{ts,js,mjs,mts}',
      'utils/**'
    ]
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore'
        ]
      }
    ]
  ],

  vite: {
    plugins: [
    ]
  }
})
