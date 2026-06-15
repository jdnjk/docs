import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '综合性文档',
  description: '混杂了各种内容的综合性文档',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    hostname: 'http://docs.jdnjk.eu.org',
    repo: 'jdnjk/docs',
    docsRepo: 'jdnjk/docs',
    docsDir: 'docs',

    navbar: [
      {
        text: '邦国文库',
        link: '/bgjq',
      },
    ],
    sidebar: {
      '/bgjq/': [
        {
          text: '总览',
          children: ['/bgjq/'],
        },
        {
          text: '二周目',
          children: ['/bgjq/2rd/CAasOP44980'],
        },
      ],
    },

    selectLanguageName: '简体中文',
    selectLanguageText: '选择语言',
    selectLanguageAriaLabel: '选择语言',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
      ],
    backToHome: '返回首页',
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),

  bundler: viteBundler(),
})