//import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'ca-ES',
  title: 'UF3.1',
  description: 'Descripció',
  base: '/UF3_1/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
  head: [
    //['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    //['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    //['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }],
    //['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
  ],
  themeConfig: {
    siteTitle: 'Introducció a la Programació',
    logo: '/img/logo.png',
    nav: [
      { text: '🏠 Inici', link: '/' },
      { text: '📋 Objectius', link: '/objectius' },
      { text: '📚 Continguts', items: [
        { text: '1. Introducció', link: '/1-introduccio' },
        { text: '2. Elements bàsics', link: '/2-elements' },
        { text: '3. Tipus de dades', link: '/3-dades' },
        { text: "4. Declaració de variables", link: '/4-variables' },
        { text: "5. Operadors", link: '/5-operadors' },
        { text: "6. Literals", link: '/6-literals' },
        { text: "7. Eixida i entrada estàndard", link: '/7-ioestandard' },
        { text: "8. Estructures alternatives", link: '/8-estructures' },
        { text: "Exemples", link: '/9-exemples' },
        { text: "Exercicis", link: '/10-exercicis' },
      ]},
      { text: '📚 Continguts addicionals', items: [
        { text: 'Les classes Math, String i Scanner', link: '/11-add_intro' },
        { text: 'Operador condicional', link: '/12-operador_cond' },
        { text: 'Guia de NetBeans', link: '/13-guia_netbeans' },
      ]}
    ],
    sidebar: [
      {
        text: '📚 Continguts',
        items: [
          { text: '1. Introducció', link: '/1-introduccio' },
          { text: '2. Elements bàsics', link: '/2-elements' },
          { text: '3. Tipus de dades', link: '/3-dades' },
          { text: "4. Declaració de variables", link: '/4-variables' },
          { text: "5. Operadors", link: '/5-operadors' },
          { text: "6. Literals", link: '/6-literals' },
          { text: "7. Eixida i entrada estàndard", link: '/7-ioestandard' },
          { text: "8. Estructures alternatives", link: '/8-estructures' },
          { text: "💡Exemples", link: '/9-exemples' },
          { text: "✏️Exercicis", link: '/10-exercicis' },
        ]
      },
      { text: '📚 Continguts addicionals', items: [
        { text: 'Les classes Math, String i Scanner', link: '/11-add_intro' },
        { text: 'Operador condicional', link: '/12-operador_cond' },
        { text: 'Guia de NetBeans', link: '/13-guia_netbeans' },
        { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
        { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
      ]}
    ],
    socialLinks: [
      { icon: 'github', link: '' }
    ],
    footer: {
      message: "CEEDCV - Centre Específic d'Educació a Distància de la Comunitat Valenciana",
      copyright: 'Copyright © 2024-2025'
    },
    outline: {
      label: 'En aquesta pàgina'
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Següent'
    }
  }
})

