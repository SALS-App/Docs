import type { SidebarConfig } from '@vuepress/theme-default'

export const de: SidebarConfig = {
    '/de/spieler/guide/': [
        {
            text: 'Guide',
            children: [
                '/de/spieler/guide/index.md',
                '/de/spieler/guide/download-&-install.md',
                '/de/spieler/guide/troubleshooting.md',
                '/de/spieler/guide/schlusswort.md'
            ]
        }
    ],
}