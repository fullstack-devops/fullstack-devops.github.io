// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "FS DevOps",
  tagline: "Fullstack applications and DevOps solutions",
  favicon: "https://avatars.githubusercontent.com/u/97617148?s=200&v=4",
  url: "https://fullstack-devops.github.io",
  baseUrl: "/",
  organizationName: "fullstack-devops", // Usually your GitHub org/user name.
  projectName: "fullstack-devops.github.io", // Usually your repo name.
  onBrokenLinks: "warn", // "throw",
  onBrokenMarkdownLinks: "warn",
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
          editUrl:
            "https://github.com/fullstack-devops/fullstack-devops.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/fullstack-devops/fullstack-devops.github.io/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ng-mat-components",
        path: "modules/ng-mat-components/docs",
        routeBasePath: "ng-mat-components",
        sidebarPath: require.resolve(
          "./modules/ng-mat-components/docs/sidebars.js"
        ),
        editUrl:
          "https://github.com/fullstack-devops/ng-mat-components/tree/main/",
      },
    ],
    require.resolve("docusaurus-lunr-search"),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/full-logo.png",
      navbar: {
        title: "FS DevOps",
        logo: {
          alt: "FS DevOps Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "overview",
            position: "left",
            label: "Overview",
          },
          /* { to: "/blog", label: "Blog", position: "left" }, */
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/fullstack-devops",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Overview",
                to: "/docs/overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/fs-devops",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/fullstack-devops",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fs DevOps. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
