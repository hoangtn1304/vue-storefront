module.exports = {
  base: '/vue-storefront/',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    repo: 'DivanteLtd/vue-storefront',
    docsDir: 'docs',
    editLinks: true,
    nav: [
      {
        text: 'YouTube',
        link: 'https://www.youtube.com/channel/UCkm1F3Cglty3CE1QwKQUhhg',
      },
      {
        text: 'Medium',
        link: 'https://medium.com/the-vue-storefront-journal',
      },
    ],
    sidebar: {
      '/guide/': [
        '',
        {
          title: 'Installation',
          collapsable: false,
          children: [
            'installation/linux-mac',
            'installation/windows',
            'installation/magento',
            'installation/production-setup',
          ],
        },
        {
          title: 'Basics',
          collapsable: false,
          children: [
            'basics/project-structure',
            'basics/configuration',
            'basics/contributing',
            'basics/feature-list',
            'basics/recipes',
            'basics/typescript',
            'basics/graphql',
            'basics/ssr-cache',
          ],
        },
        {
          title: 'Core and themes',
          collapsable: false,
          children: [
            'core-themes/themes',
            'core-themes/layouts',
            'core-themes/core-components',
            'core-themes/ui-store',
            'core-themes/translations',
            'core-themes/service-workers',
            'core-themes/webpack',
            'core-themes/plugins',
          ],
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            'components/home-page',
            'components/category-page',
            'components/product',
            'components/modal',
          ],
        },
        {
          title: 'Data in Vue Storefront',
          collapsable: false,
          children: [
            'data/data',
            'data/elasticsearch',
            'data/data-migrations',
            'data/elastic-queries',
            'data/database-tool',
            'data/entity-types',
          ],
        },
        {
          title: 'Working with Vuex',
          collapsable: false,
          children: [
            'vuex/introduction',
            'vuex/product-store',
            'vuex/category-store',
            'vuex/cart-store',
            'vuex/checkout-store',
            'vuex/order-store',
            'vuex/stock-store',
            'vuex/sync-store',
            'vuex/user-store',
            'vuex/attribute-store',
            'vuex/ui-store',
          ],
        },
        {
          title: 'Modules',
          collapsable: false,
          children: ['modules/introduction', 'modules/cart'],
        },
        {
          title: 'Integrations',
          collapsable: false,
          children: [
            'integrations/integrations',
            'integrations/reviews',
            'integrations/paypal-payments',
            'integrations/prices-sync',
            'integrations/multistore',
          ],
        },
      ],
    },
  },
  title: 'Vue Storefront',
  description: 'Headless PWA for eCommerce',
};
