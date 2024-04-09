import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '博客',
    activeMatch: '/blog/',
    link: '/blog/'
  },
  {
    text: '不卡科技',
    activeMatch: '/buka/',
    link: '/buka/'
  },
  {
    text: '思考',
    activeMatch: '/think/',
    link: '/think/'
  },
  { text: '工具导航', link: '/nav', activeMatch: '^/nav' },
]
