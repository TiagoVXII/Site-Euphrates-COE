// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Site Euphrates | Code of Ethics',
  tagline: '',
  favicon: 'img/favicon.ico',
  
  

  // Set the production url of your site here
  url: 'https://site-malware-coe.pages.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
           'https://github.com/TiagoVXII/Site-Euphrates-COE/tree/main',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
           'https://github.com/TiagoVXII/Site-Euphrates-COE/tree/main',
        },
       
        
       
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.ico',
      navbar: {
        title: 'Site Euphrates | Code of Ethics',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon-32x32.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Code of Ethics',
          },
          {
            href: 'https://github.com/TiagoVXII/Site-Euphrates-COE',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/TiagoVXII/Site-Euphrates-COE',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/gQPgpp4aDe',
              },
            ],
          },
        ],
      logo: {
      alt: 'Image',
      src: '/img/wolfstudios.jpg',
      href: 'https://discord.gg/gQPgpp4aDe',
      },
        copyright: `Copyright © ${new Date().getFullYear()} Site Euphrates, Inc. Built with Docusaurus. Powered by Wolf Studios.`,
      },
announcementBar: {
        id: 'announce_bar',
        content:
          'The Code of Ethics is subject to change at any time. Major changes will be announced in the main communications server.',
        backgroundColor: '#0000001a',
        textColor: '#5f98c0',
        isCloseable: false,
},
      colorMode: {
  defaultMode: 'dark',
  disableSwitch: true,
  respectPrefersColorScheme: false
},

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
