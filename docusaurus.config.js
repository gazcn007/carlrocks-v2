// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Carl’s Tech Journal",
  tagline: 'Code, Craft, Create',
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 10,
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
        title: "Carl Liu",
        logo: {
          alt: 'Carlrocks.com',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'right'},
          {to: '/docs/category/product', label: 'Product 💡', position: 'left'},
          {
            type: 'dropdown',
            label: 'Technology 👨🏻‍💻',
            position: 'left',
            items: [
              {
                to: "docs/Patterns/Backtracking/Introduction",
                label: "Patterns",
                activeBasePath: "docs/Patterns"
              },
              {
                to: "docs/Algorithms/Sorting/BubbleSort",
                label: "Algorithms",
                activeBasePath: "docs/Algorithms"
              },
              {
                to: "docs/DataStructures/Basic/BinaryTree/Definitions&&Properties",
                label: "Data Structures",
                activeBasePath: "docs/DataStructures"
              },
              {
                to: "docs/Language/Java/Overview",
                label: "Language",
                activeBasePath: "docs/Language"
              },
            ],
          },
          {to: '/docs/category/photography', label: 'Photography 📷', position: 'left'}
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
                label: 'GitHub',
                href: 'https://github.com/gazcn007',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/13764675/gazcn007',
              }
            ],
          },
          {
            title: 'About me',
            items: [
              {
                label: 'Daily Logs',
                to: '/docs/category/logs',
              },
              {
                href: 'https://carlrocks.com/pdf/CARL-CV.pdf',
                label: 'Official Resume',
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
      algolia: {
        // The application ID provided by Algolia
        appId: '0DAM18B7XY',
        // Public API key: it is safe to commit it
        apiKey: 'a6c91cb1c19210707f41e20257215892',
        indexName: 'carlrocks',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search'
      },
    }),
  trailingSlash: false,
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

module.exports = config;
