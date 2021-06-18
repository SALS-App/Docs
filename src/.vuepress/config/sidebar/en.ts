import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
    '/player/guide/': [
        {
            isGroup: true,
            text: 'Guide',
            children: [
                '',
                'download-&-install.md',
                'troubleshooting.md',
                'closing-remarks.md'
            ]
        }
    ],
}