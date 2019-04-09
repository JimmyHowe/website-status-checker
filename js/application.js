class Application {

  static Navigate = new MenuManager();

  /**
   * Turns on test mode
   *
   * @param status
   * @constructor
   */
  static TestMode(status)
  {
    App.$root.shared.testMode = status;
  }

  /**
   * Boots the application
   *
   * @constructor
   */
  static Boot()
  {
    console.log("Booting Application...");

    Auth.onAuthStateChanged(function (user)
    {
      if (user)
      {
        App.$root.shared.isLoggedIn = true;
      } else
      {
        App.$root.shared.isLoggedIn = false;
      }
    });
  }

  /**
   * Check if user is logged in
   *
   * @returns {boolean}
   */
  static isLoggedIn()
  {
    return this.getFirebaseUser();
  }

  /**
   * Logs in user and returns Firebase object
   *
   * @param email
   * @param password
   *
   * @returns {*}
   */
  static LogInUsingFirebase(email, password)
  {
    return Auth.signInWithEmailAndPassword(email, password);
  }

  /**
   *
   * @constructor
   */
  static RegisterUserUsingFirebase(email, password)
  {
    return Auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * Sets the application in protected mode
   *
   * @constructor
   */
  static Guard()
  {
    Router.beforeEach((to, from, next) =>
    {
      if (to.path === '/logout')
      {
        Application.logOutUser();

        return next({ path: '/login' })
      }

      if (App.$root.shared.isLoggedIn != null)
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

  /**
   * Unguards the routes
   *
   * @constructor
   */
  static Unguard()
  {
    Router.beforeEach((to, from, next) =>
    {
      return next()
    });
  }

  /**
   * Gets the firebase user
   *
   * @returns {*}
   */
  static getFirebaseUser()
  {
    return Auth.currentUser;
  }

  /**
   * Log out logic
   */
  static logOutUser()
  {
    Auth.signOut().then(function() {
      App.$root.shared.isLoggedIn = null;
      App.$root.shared.user = null;
    }, function(error) {
      console.log(error);
    });
  }

  /**
   * Log in logic
   *
   * @constructor
   */
  static LogIn()
  {
    App.$root.shared.isLoggedIn = true;

    this.Navigate.Home();
  }
}