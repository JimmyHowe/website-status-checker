class Application {

  static Navigate = new MenuManager();

  static TestMode(status)
  {
    App.$root.shared.testMode = status;
  }

  static Boot()
  {
    console.log("Booting Application...");

    Auth.onAuthStateChanged(function(user) {
      if (user) {
        App.$root.user = user.id;
      } else {
        App.$root.user = null;
      }
    });
  }

  static isLoggedIn()
  {
    let user = Auth.currentUser;

    return !!user;
  }

  /**
   * Logs in the user
   *
   * @param email
   * @param password
   */
  static logIn(email, password)
  {
    return Auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Logs in a Guest User
   */
  static logInGuest()
  {
    this._User = new GuestUser();
  }

  /**
   *
   * @constructor
   */
  static RegisterUser(email, password)
  {
    let response = Auth.createUserWithEmailAndPassword(email, password)
                       .then(function (credentials)
                       {
                         Application.Navigate.Home();
                       })
                       .catch(function (error)
                       {
                         const errorCode = error.code;
                         const errorMessage = error.message;

                         console.log(errorMessage);
                       });
  }

  static Guard()
  {
    Router.beforeEach((to, from, next) =>
    {
      if(App.$root.shared.isLoggedIn != null)
      {
        return next();
      }

      if (to.path === '/login' || to.path === '/register')
      {
        return next()
      }

      return next({ path: '/login' })
    });
  }

  static Unguard()
  {
    Router.beforeEach((to, from, next) =>
    {
      return next()
    });
  }

  static getFirebaseUser()
  {
    return Auth.currentUser;
  }
}