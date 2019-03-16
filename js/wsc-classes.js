class User {

  email;
  testSuites;
  settings;

  static isLoggedIn()
  {
    let user = Auth.currentUser;

    return !!user;
  }

  getEmail()
  {
    return this.email;
  }

  setEmail(email)
  {
    this.email = email;
  }

  getTestSuites()
  {
    return this.testSuites;
  }

  setTestSuites(testSuites)
  {
    this.testSuites = testSuites;
  }

  getSettings()
  {
    return this.settings;
  }

  setSettings(settings)
  {
    this.settings = settings;
  }
}

class GuestUser extends User {

  saveTestSuites()
  {

  }

}

class RegisteredUser extends User {

  saveTestSuites()
  {
    // logic
  }

}

class MenuManager {

  currentPage;

  setCurrentPage(currentPage)
  {
    //logic
  }

  getCurrentPage()
  {
    //logic
  }

}

class Application {

  menuManager;
  user;

  setUser(user)
  {
    //logic
  }

  getUser()
  {
    //logic
  }

  setMenuManager(menuManager)
  {
    //logic
  }

  getMenuManager()
  {
    //logic
  }

}

class settings {

  notifications;
  timeout;
  urgency;

  getNotifications()
  {
    //logic
  }

  setNotifications(notifications)
  {
    //logic
  }

  getTimeout()
  {
    //logic
  }

  setTimeout(timeout)
  {
    //logic
  }

  getUrgency()
  {
    //logic
  }

  setUrgency(urgency)
  {
    //logic
  }

}

class testSuite {

  url;
  tag;
  status;

  getUrl()
  {
    //logic
  }

  setUrl(url)
  {
    //logic
  }

  getTag()
  {
    //logic
  }

  setTag(tag)
  {
    //logic
  }

  getStatus()
  {
    //logic
  }

}

class Repository {
  constructor(collection)
  {
    this.collection = collection;
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

class SettingsRepository extends Repository {
  constructor()
  {
    super("settings");
  }
}

class StatusChecker {
  static check(url)
  {
    axios.get(url)
         .then(function (response)
         {
           console.log(response)
         })
         .catch(function (error)
         {
           console.log(error)
         });

    return true;
  }
}

class TestSuite {

  constructor(url)
  {
    this.url = url;
  }

  checkStatus()
  {
    return StatusChecker.check(this.url)
  }
}