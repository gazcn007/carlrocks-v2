// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carl Liu',
  tagline: 'How hard can it be?',
  url: 'https://carlrocks.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gazcn007', // Usually your GitHub org/user name.
  projectName: 'gazcn007.github.io', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 10
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
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Carl Liu',
        logo: {
          alt: 'Carlrocks.com',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: "docs/Patterns/Backtracking/Introduction",
            label: "Patterns",
            position: "right",
            activeBasePath: "docs/Patterns"
          },
          {
            to: "docs/Algorithms/Sorting/BubbleSort",
            label: "Algorithms",
            position: "right",
            activeBasePath: "docs/Algorithms"
          },
          {
            to: "docs/DataStructures/Basic/BinaryTree/Definitions&&Properties",
            label: "Data Structures",
            position: "right",
            activeBasePath: "docs/DataStructures"
          },
          {
            to: "docs/Language/Java/Overview",
            label: "Language",
            position: "right",
            activeBasePath: "docs/Language"
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'Patternize.io',
                href: 'https://patternize.github.io',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/13764675/gazcn007',
              },
              {
                label: 'Steam',
                href: 'http://steamcommunity.com/id/gazcn007',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/gazcn007/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gazcn007',
              },
            ],
          },
          {
            title: 'About me',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gazcn007',
              },
              {
                href: 'https://carlrocks.com/pdf/CARL-CV.pdf',
                label: 'Resume',
                position: 'right',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Carlrocks.com, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php']
      },
    }),
  trailingSlash: false,
};

module.exports = config;
