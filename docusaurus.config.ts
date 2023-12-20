import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '우켱의 블로그',
  tagline: '개발, 독서, 일상 등 다양한 주제로 글을 쓰는 블로그입니다.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ctdlog.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ctdlog', // Usually your GitHub org/user name.
  projectName: 'ctdlog.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: {
          routeBasePath: '/dev',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogTitle: '우켱의 기술 블로그',
          blogDescription: '우켱의 기술 블로그입니다.',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/space.jpg',
    navbar: {
      title: '우켱',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'study',
          position: 'left',
          label: '공부',
        },
        { to: '/dev', label: '개발', position: 'left' },
        {
          to: '/me',
          label: '일상',
          position: 'left',
        },
        {
          to: '/book',
          label: '독서',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Velog (Deprecated)',
              href: 'https://velog.io/@ctdlog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ctdlog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wookhyung, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'me',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'me',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './me',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'book',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'book',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './book',
      },
    ],
  ],
};

export default config;
