export class Repository {
  constructor(collection)
  {
    this.collection = collection;
  }

  /**
   * Writes user data to database.
   *
   * @param user
   * @returns {*}
   */
  static writeUserData(user)
  {
    let uid = Auth.currentUser.uid;

    return DB.ref('users/' + uid).set({
      tests   : user.getTestSuites(),
      settings: user.getSettings(),
    });
  }

  getCollection()
  {
    return DB.collection(this.collection);
  }

  getDocument(document)
  {
    return DB.collection(this.collection).doc(document);
  }
}