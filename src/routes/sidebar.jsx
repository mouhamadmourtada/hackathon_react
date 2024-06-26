/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {

    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Tableau de bord', // name that appear in Sidebar

  },
  {
    path: "/app/store",
    icon: "MarketIcon",
    name: "Store",
  },
  {
    path: "/app/product",
    icon: "ProductIcon",
    name: "Mes annonces",
  },
  {
    path: "/app/orders",
    icon: "OrderIcon",
    name: "Commandes",
  },
  {
    path: '/app/rappels',
    icon: 'ProductIcon',
    name: 'Rappels',  
  },
  {
    path: "/app/panier",
    icon: "CartIcon",
    name: "Panier",
  },
  {
    path: "/app/recettes",
    icon: "Book",
    name: "Recettes",
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
];

export default routes;
