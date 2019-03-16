class MenuManager {

  currentPage;

  setCurrentPage(currentPage)
  {
    Router.push(this.currentPage = currentPage)
  }

  getCurrentPage()
  {
    return this.currentPage;
  }

  Login()
  {
    this.setCurrentPage('login')
  }

  Register()
  {
    this.setCurrentPage('register')
  }

  Home()
  {
    this.setCurrentPage('/')
  }

  Tests()
  {
    this.setCurrentPage('/')
  }

  Settings()
  {
    this.setCurrentPage('settings')
  }

  Guard()
  {
    Router.beforeEach((to, from, next) =>
    {
      if (to.path === '/login' || to.path === '/register')
      {
        return next()
      }

      return next({ path: '/login' })
    });
  }

  Unguard()
  {
    Router.beforeEach((to, from, next) =>
    {
      return next()
    });
  }
}