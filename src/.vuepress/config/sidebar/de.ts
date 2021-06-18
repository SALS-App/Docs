import type { SidebarConfig } from '@vuepress/theme-default'

export const de: SidebarConfig = {
    '/de/spieler/guide/': [
        {
            isGroup: true,
            text: 'Guide',
            children: [
                '',
                'download-&-install.md',
                'troubleshooting.md',
                'schlusswort.md'
            ]
        }
    ]
}