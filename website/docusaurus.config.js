// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/palenight');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eLLMental',
  favicon: 'img/isotype.png',

  // Set the production url of your site here
  url: 'https://python.ellmental.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'The Agile Monkeys S.L.', // Usually your GitHub org/user name.
  projectName: 'ellmental', // Usually your repo name.

  onBrokenLinks: 'throw',
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
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
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
      image: 'img/logoellmental.png',
      stylesheets: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'],
      navbar: {
        logo: {
          alt: 'eLLMental Logo',
          src: '/img/logoellmental.png',
          srcDark: '/img/ellemental white.png',
        },
        items: [
          {
            href: 'https://github.com/theam/ellmental.py',
            label: 'Github',
            position: 'right',
          },
          {
            href: 'https://discord.gg/ZajFQEjgFw',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        additionalLanguages: ['ini'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
        ],
      },
    }),
};

module.exports = config;
