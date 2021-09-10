const { description } = require('../../package')

module.exports = {

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
      title: 'SALS Documentation & Help',
      description: ''
    },
    '/de/': {
      lang: 'de-DE', // this will be set as the lang attribute on <html>
      title: 'SALS Dokumentation & Hilfe',
      description: ''
    }
  },

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'SALS Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
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
        nav: [
          {
            text: 'Guide',
            link: '/player/guide/',
          },
          {
            text: 'Settings',
            link: '/player/config/'
          }
        ],
        sidebar: {
          '/player/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'download-&-install',
                'troubleshooting',
                'closing-remarks'
              ]
            }
          ],
        }
      },
      '/de/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'Deutsch',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
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
        nav: [
          {
            text: 'Guide',
            link: '/de/spieler/guide/',
          },
          {
            text: 'Einstellungen',
            link: '/de/spieler/config/'
          }
        ],
        sidebar: {
          '/de/spieler/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'download-&-install',
                'troubleshooting',
                'schlusswort'
              ]
            }
          ],
        }
      }
    },

    repo: 'https://github.com/SALS-App/Docs',
    editLinks: true,
    docsDir: 'src/',
    editLinkText: '',
    lastUpdated: true,
    nav: [],
    sidebar: {}
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/medium-zoom',
  ]
}
