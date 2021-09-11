import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
    '/player/guide/': [
        {
            text: 'Guide',
            children: [
                '/player/guide/index.md',
                '/player/guide/download-&-install.md',
                '/player/guide/troubleshooting.md',
                '/player/guide/closing-remarks.md'
            ]
        }
    ],
}