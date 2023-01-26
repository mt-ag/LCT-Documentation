// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LCT Documentation",
  tagline: "Making Testing APEX easy",
  url: "https://docs.lct.software",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

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
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/mt-ag/LCT-Documentation/blob/main/",
        },
        blog: false,
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
      navbar: {
        title: "Low Code Testing",
        logo: {
          alt: "LCT Logo",
          src: "img/lct-logo.svg",
        },
        items: [
          // {
          // 	type: "doc",
          // 	docId: "intro",
          // 	position: "left",
          // 	label: "Tutorial",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://lct.software",
            label: "LCT Website",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/LowCodeTesting",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCWj_laDAKjgRaw4SjEdVyIA",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Homepage",
                href: "https://lct.software",
              },
              {
                label: "Blog",
                href: "https://lct.software/blog",
              },
            ],
          },
          {
            title: "LCT by MT",
            items: [
              {
                label: "MT Website",
                href: "https://www.mt-itsolutions.com/",
              },
              {
                label: "MT APEX Page",
                href: "https://apex.mt-itsolutions.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MT. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/",
      },
    ],
  ],
};

module.exports = config;
