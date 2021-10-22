import { defineUserConfig } from "@vuepress/cli";
import { DefaultThemeOptions } from "@vuepress/theme-default";

import { navbar, sidebar } from "./configs";

export default defineUserConfig<DefaultThemeOptions>({

  base: '/',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  shouldPrefetch: true,

  locales: {
    '/': {
      lang: 'en-US',
      title: 'SALS Documentation & Help',
      description: 'ArmA Modset Syncer and Launcher'
    },
    '/de/': {
      lang: 'de-DE',
      title: 'SALS Dokumentation & Hilfe',
      description: 'ArmA Modset Syncer und Launcher'
    }
  },

  themeConfig: {
    repo: 'https://github.com/SALS-App/Docs',
    docsDir: 'src',
    docsBranch: 'master',
    editLinks: true,
    contributors: false,
    lastUpdated: true,

    locales: {
      '/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        editLinkText: 'Edit this page',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        navbar: navbar.en,
        sidebar: sidebar.en
      },
      '/de/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'Deutsch',
        editLinkText: 'Diese Seite bearbeiten',
        serviceWorker: {
          updatePopup: {
            message: "Eine neue Version ist verfügbar",
            buttonText: "Neu laden"
          }
        },
        navbar: navbar.de,
        sidebar: sidebar.de
      }
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/de/': {
            placeholder: 'Suchen',
          },
        },
      },
    ],
  ]
});