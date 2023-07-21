// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "알츠윈 문서",
  tagline: "가장 쉬운 대중 인지 건강 관리",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://docs.alzwin.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "spostudio", // Usually your GitHub org/user name.
  projectName: "alzwin_docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["en", "ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/alzwin_logo_signup.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "guideSidebar",
            position: "left",
            label: "문서",
          },
          {
            type: "docSidebar",
            sidebarId: "apiSidebar",
            to: "/api",
            label: "API",
            // position: "left",
            // activeBaseRegex: "^(/[^/]+)?/api/.*",
          },
          // { to: "/blog", label: "블로그", position: "left" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          //   dropdownItemsAfter: [
          //     // {
          //     //   type: 'html',
          //     //   value: '<hr style="margin: 0.3rem 0;">',
          //     // },
          //     // {
          //     //   href: 'https://alzwin.com',
          //     //   label: 'Alzwin',
          //     // },
          //   ],
          // },
        ],
      },
      footer: {
        logo: {
          href: "/",
          src: "/img/alzwin_logo_header.png",
          srcDark: "/img/alzwin_logo_header.png",
          alt: "AlzWIN",
          // height: '36px',
        },
        links: [
          {
            title: "문서",
            items: [
              {
                label: "소개",
                to: "/docs/guide/introduce",
              },
              {
                label: "API",
                to: "/docs/api/introduce",
              },
            ],
          },
          {
            title: "링크",
            items: [
              {
                label: "알츠윈",
                href: "https://alzwin.com",
              },
              {
                label: "세븐포인트원",
                href: "https://sevenptone.com",
              },
            ],
          },
          // {
          //   title: '그외',
          //   items: [
          //     {
          //       label: '블로그',
          //       to: '/blog',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SevenPointOne.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
