// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Carl’s Tech Journal",
  tagline: "Code, Craft, Create",
  url: "https://carlrocks.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gazcn007", // Usually your GitHub org/user name.
  projectName: "gazcn007.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "All posts",
          blogSidebarCount: 15,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Carl Liu`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      liveCodeBlock: {
        playgroundPosition: "bottom",
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        title: "Carl Liu",
        logo: {
          alt: "Carlrocks.com",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/docs/Product/Startup/ARoadmap",
            label: "Product",
            position: "left",
          },
          {
            to: "/docs/Technology/Algorithms/Backtracking/Introduction",
            label: "Technology",
            position: "left",
          },
          {
            to: "/docs/Lifestyle/Journey",
            label: "Lifestyle",
            position: "left",
          },
          // {to: '/docs/About', label: 'Me', position: 'left'},
          { to: "/blog", label: "Blog", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Projects",
            items: [
              {
                label: "Patternize.io",
                href: "https://patternize.github.io",
              },
              {
                label: "ootd.ai",
                href: "https://apps.apple.com/us/app/ootd-ai/id6504292959",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/gazcn007",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/13764675/gazcn007",
              },
            ],
          },
          {
            title: "About me",
            items: [
              {
                href: "https://carlrocks.com/pdf/CARL-CV.pdf",
                label: "Official Resume",
                position: "right",
              },
              {
                label: "Chinese Blog (中文博客)",
                to: "/docs/category/Chinese",
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Carl Liu`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php"],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "0DAM18B7XY",
        // Public API key: it is safe to commit it
        apiKey: "a6c91cb1c19210707f41e20257215892",
        indexName: "carlrocks",
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",
      },
      metadata: [
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "google-site-verification",
          content: "4oLJEFb47liri2rc9R-_5xkX6A8nzvVnw_tvRtIXfRE",
        },
      ],
      image: "img/social-card.png",
      ogImage: "img/social-card.png",
      twitterImage: "img/social-card.png",
      sitemap: {
        changefreq: "weekly",
        priority: 0.5,
      },
    }),
  trailingSlash: false,
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
