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
}