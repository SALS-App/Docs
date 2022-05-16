import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from '@vuepress/plugin-search';

import { navbar, sidebar } from "./configs";

export default defineUserConfig({
  base: '/',
  shouldPrefetch: true,

  locales: {
    '/': {
      lang: 'en-US',
      title: 'SALS Documentation & Help',
      description: 'ArmA Modset Syncer and Launcher',
    },
    '/de/': {
      lang: 'de-DE',
      title: 'SALS Dokumentation & Hilfe',
      description: 'ArmA Modset Syncer und Launcher',
    },
  },

  theme: defaultTheme({
    repo: 'https://github.com/SALS-App/Docs',
    docsDir: 'src',
    docsBranch: 'master',
    editLink: true,
    contributors: false,
    lastUpdated: true,

    locales: {
      '/': {
        lang: 'en-US',
        title: 'SALS Documentation & Help',
        description: 'ArmA Modset Syncer and Launcher',
        navbar: navbar.en,
        sidebar: sidebar.en,
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        editLinkText: 'Edit this page',
      },
      '/de/': {
        lang: 'de-DE',
        title: 'SALS Dokumentation & Hilfe',
        description: 'ArmA Modset Syncer und Launcher',
        navbar: navbar.de,
        sidebar: sidebar.de,
        selectLanguageText: 'Languages',
        selectLanguageName: 'Deutsch',
        editLinkText: 'Diese Seite bearbeiten',
      }
    },
  }),

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/de/': {
          placeholder: 'Suchen',
        },
      },
    })
  ]
});