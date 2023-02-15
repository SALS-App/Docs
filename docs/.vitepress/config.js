export default {
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/player/guide/' },
            { text: 'Settings', link: '/player/config/' }
        ],
        sidebar: {
            // This sidebar gets displayed when a user
            // is on `guide` directory.
            '/player/guide/': [
                {
                    text: 'Guide',
                    items: [
                        { text: 'Introduction', link: '/player/guide/' },
                        { text: 'Download & Installation', link: '/player/guide/download-&-install.md' },
                        { text: 'Troubleshooting', link: '/player/guide/troubleshooting.md' },
                        { text: 'Closing Marks', link: '/player/guide/closing-remarks.md' }
                    ]
                }
            ],
            '/config/': [
                {
                    text: 'Config',
                    items: [
                        { text: 'Index', link: '/config/' },
                        { text: 'Three', link: '/config/three' },
                        { text: 'Four', link: '/config/four' }
                    ]
                }
            ]
        }
    }
}