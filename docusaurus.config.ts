import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type {Options as PresetOptions, ThemeConfig} from '@docusaurus/preset-classic';
import type {Config} from '@docusaurus/types';
import type {Options as ClassicThemeOptions} from '@docusaurus/theme-classic';

const docsOptions: DocsOptions = {
  path: 'docs',
  routeBasePath: 'docs',
  sidebarPath: './sidebars.ts',
  exclude: ['**/unused/**'],
  editUrl: 'https://github.com/westminsterwooster/wpc-tech-docs/edit/main/',
  showLastUpdateTime: true,
  showLastUpdateAuthor: true,
  includeCurrentVersion: true,
  lastVersion: '2026.05a',
  versions: {
    current: {
      label: 'Next',
      path: 'next',
      banner: 'unreleased'
    },
    '2026.05a': {
      label: '2026.05a',
      path: '2026.05a',
      banner: 'none',
      badge: false
    }
  }
};

const presetOptions: PresetOptions = {
  docs: docsOptions,
  blog: false,
  theme: {
    customCss: './src/css/custom.css'
  } satisfies ClassicThemeOptions,
  sitemap: {
    changefreq: 'weekly',
    priority: 0.5
  }
};

const themeConfig: ThemeConfig = {
  image: 'img/WPC_logo.png',
  colorMode: {
    respectPrefersColorScheme: true
  },
  navbar: {
    title: 'Insider Documentation',
    logo: {
      alt: 'Westminster Presbyterian Church logo',
      src: 'img/WPC_logo.png'
    },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'docsSidebar',
        position: 'left',
        label: 'Docs'
      },
      {
        type: 'docsVersionDropdown',
        position: 'right'
      },
      {
        href: 'https://github.com/westminsterwooster/wpc-tech-docs',
        label: 'GitHub',
        position: 'right'
      }
    ]
  },
  footer: {
    style: 'dark',
    links: [
      {
        title: 'Documentation',
        items: [
          {label: 'Building Controls', to: '/docs/2026.05a/documentation/'},
          {label: 'Service Instructions', to: '/docs/2026.05a/docs/general'},
          {label: 'Computer', to: '/docs/2026.05a/docs/computer'},
          {label: 'Online Applications', to: '/docs/2026.05a/docs/online'}
        ]
      },
      {
        title: 'Westminster',
        items: [
          {label: 'Website', href: 'https://wpcwooster.org'},
          {label: 'Facebook', href: 'https://www.facebook.com/wpcwooster'},
          {label: 'Instagram', href: 'https://www.instagram.com/wpc_wooster'},
          {label: 'YouTube', href: 'https://www.youtube.com/westminsterwooster'}
        ]
      },
      {
        title: 'Contact',
        items: [
          {label: 'GitHub', href: 'https://github.com/westminsterwooster/wpc-tech-docs'},
          {label: 'Email', href: 'mailto:jack@wpcwooster.org'}
        ]
      }
    ],
    copyright:
      'Copyright (c) 2026 Jack Veney for Westminster Presbyterian Church Wooster, Ohio.'
  },
  prism: {
    additionalLanguages: ['powershell', 'yaml']
  }
};

const config: Config = {
  title: 'Insider Documentation',
  tagline: 'Westminster Presbyterian Church Mackey Hall Technology',
  favicon: 'img/WPC_logo.png',
  url: 'https://wpctechdocs.info',
  baseUrl: '/',
  organizationName: 'westminsterwooster',
  projectName: 'wpc-tech-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },
  presets: [
    [
      'classic',
      presetOptions
    ]
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        language: ['en']
      }
    ]
  ],
  themeConfig
};

export default config;
