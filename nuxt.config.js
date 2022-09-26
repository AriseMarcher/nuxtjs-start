module.exports = {
  router: {
    base: '/app/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '/other-about',
        component: resolve(__dirname, 'pages/about.vue')
      })
    }
  }
}