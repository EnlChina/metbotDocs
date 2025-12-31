import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: 'AgentMetBot',
      description: 'AgentMetBot使用文档',
    },
    {
      lang: 'en',
      label: 'English',
      title: 'AgentMetBot',
      description: 'AgentMetBot Documentation',
    },
    {
      lang: 'ja',
      label: '日本語',
      title: 'AgentMetBot',
      description: 'AgentMetBot ドキュメント',
    },
  ],
  root: path.join(__dirname, 'docs'),
  title: 'AgentMetBot使用文档',
  icon: '/metbotlogo.png',
  lang: 'zh',
  logo: {
    light: '/metbotlogo.png',
    dark: '/metbotlogo.png',
  },
  themeConfig: {
    footer: {
      message: "2025 © EnlChina. All Rights Reserved.",
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/EnlChina',
      },
    ],
    editLink: {
      docRepoBaseUrl:
        'https://github.com/EnlChina/metbotDocs/tree/main/docs',
      text: 'Edit this page on GitHub',
    },
  },
});
