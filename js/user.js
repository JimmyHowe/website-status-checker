class User {

  email;

  testSuites = [];

  settings = new UserSettings();

  constructor(email, testSuites, settings)
  {
    this.email = email;
    this.testSuites = testSuites;
    this.settings = settings;
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

