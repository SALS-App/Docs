import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { de, en } from './config/sidebar';

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: "/",

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
      title: 'SALS Documentation & Help',
      description: 'SALS Documentation and Help'
    },
    '/de/': {
      lang: 'de-DE',
      title: 'SALS Dokumentation & Hilfe',
      description: 'SALS Dokumentation und Hilfe'
    }
  },


  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ['meta', { name: 'application-name', content: 'SALS Docs' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'SALS Docs' }],
    ['meta', { name: 'msapplication-TileColor', content: '#0064fb' }],
    ['meta', { name: 'theme-color', content: '#0064fb' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {

    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        navbar: [
          {
            text: 'Guide',
            link: '/player/guide/',
          },
          {
            text: 'Settings',
            link: '/player/config/'
          },
          {
            text: 'Troubleshooting',
            link: '/player/troubleshooting/'
          }
        ],
        sidebar: en
      },
      '/de/': {
        selectLanguageName: 'Deutsch',
        selectLanguageText: 'Deutsch',
        selectLanguageAriaLabel: 'Deutsch',
        editLinkText: 'Diese Seite bearbeiten',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "Eine neue Version ist verfügbar",
            buttonText: "Neu laden"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        navbar: [
          {
            text: 'Guide',
            link: '/de/spieler/guide/',
          },
          {
            text: 'Einstellungen',
            link: '/de/spieler/config/'
          },
          {
            text: 'Troubleshooting',
            link: '/de/spieler/troubleshooting/'
          }
        ],
        sidebar: de
      }
    },

    repo: 'https://github.com/SALS-App/Docs',
    editLinks: true,
    contributors: false,
    docsDir: 'src/',
    lastUpdated: true,
  }
});