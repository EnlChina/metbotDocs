import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'Rspress',
      description: 'Static Site Generator',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'Rspress',
      description: '静态网站生成器',
    },
  ],
  root: path.join(__dirname, 'docs'),
  title: 'My Demo Site',
  icon: '/metbotlogo.png',
  lang: 'zh',
  logo: {
    light: '/metbotlogo.png',
    dark: '/metbotlogo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
    editLink: {
      docRepoBaseUrl:
        'https://github.com/PBnicad/rspress-template/tree/main/docs',
      text: 'Edit this page on GitHub',
    },
  },
});
