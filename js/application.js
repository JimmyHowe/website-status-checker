class Application {

  static Navigate = new MenuManager();

  static _User;

  static get User()
  {
    return this._User;
  }

  static set User(value)
  {
    this._User = value;
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
    let that = this;

    let status = false;

    let response = Auth.signInWithEmailAndPassword(email, password)
                       .then(function (credentials)
                       {
                         that._User = new RegisteredUser();

                         status = true;
                       })
                       .catch(function (error)
                       {
                         console.log(error)
                       });
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

                       })
                       .catch(function (error)
                       {
                         const errorCode = error.code;
                         const errorMessage = error.message;

                         console.log(errorMessage);
                       });
  }
}