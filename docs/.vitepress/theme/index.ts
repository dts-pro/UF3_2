import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import './styles/custom.css'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout)
  },
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  }
} satisfies Theme