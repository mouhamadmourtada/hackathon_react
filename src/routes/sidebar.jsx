/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/store',
    icon: 'MarketIcon',
    name: 'Store',
  },
  {
    path: '/products',
    icon: 'ProductIcon',
    name: 'Produits',
  },
  {
    path: '/orders',
    icon: 'OrderIcon',
    name: 'Commandes',
  },

  {
    path: '/todos',
    icon: 'CartIcon',
    name: 'Panier',
  },

  // {
  //   path: '/cards',
  //   icon: 'CardsIcon',
  //   name: 'Cards',
  // },
  // {
  //   path: '/charts',
  //   icon: 'ChartsIcon',
  //   name: 'Charts',
  // },
  // {
  //   path: '/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: '/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
  // {
  //   path: '/tables',
  //   icon: 'TablesIcon',
  //   name: 'Tables',
  // },
  
]

export default routes
