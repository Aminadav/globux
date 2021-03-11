/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'GlobX',
  tagline: 'Lightweight & powerful state management for Redux. 90% less code to write in compare to Redux/MobX.',
  url: 'https://globx.js.org',
  baseUrl: '/globx/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aminadav', // Usually your GitHub org/user name.
  projectName: 'globx', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GlobX',
      logo: {
        alt: 'GlobX',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/aminadav/globx',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/globx',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/aminadav/globx/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Reddit post',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/aminadav/globx',
            },
            {
              label: 'Reddit post',
              href: 'https://www.reddit.com/r/reactjs/comments/m27hqm/globux_a_global_state_manager_that_let_you_read/?sort=new',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GlobX.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/aminadav/globx/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/aminadav/globx/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
