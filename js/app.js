
/*
      The Login Page
 */
const RegisterPage = Vue.component('register-page', {
  data    : function ()
  {
    return {
      email   : '',
      password: ''
    }
  },
  template: `
    <div class="card">
        <div class="card-divider">
            <h1>Register</h1>
        </div>
        <div class="card-section">
            <label for="register-email">Email</label>
            <input type="text" v-model="email" id="register-email" name="email">

            <label for="register-password">Password</label>
            <input type="text" v-model="password" id="register-password" name="password">

            <button class="button" v-on:click="onRegister">Register</button>
        </div>
    </div>
    `,
  methods : {
    onRegister: function ()
    {

    }
  }
});

/*
      The Login Page
 */
const LoginPage = Vue.component('login-page', {
  data    : function ()
  {
    return {
      hasError: false,
      error   : {
        heading: "Error",
        message: ""
      },
      email   : '',
      password: ''
    }
  },
  methods : {
    onLogin()
    {
      let status = Application.logIn(this.email, this.password);

      if (Application.isLoggedIn())
      {
        this.$root.isLoggedIn = true;

        Application.Navigate.Tests();
      } else
      {
        this.$root.isLoggedIn = false;
      }
    },
    onLoginAsGuest()
    {
      let status = Application.logInGuest();

      Application.Navigate.Home();
    }
  },
  template: `
    <div id="LoginPage" class="card">
        <div class="card-divider">
            <h1>Login</h1>
        </div>
        <div v-if="hasError" class="card-section">
            <div class="callout alert" data-closable>
                    <h5>{{ error.heading }}</h5>
                    <p>{{ error.message }}</p>
                    <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
        </div>
        <div class="card-section">
            <label for="login-email">Email</label>
            <input type="text" v-model="email" id="login-email" name="email">

            <label for="login-password">Password</label>
            <input type="text" v-model="password" id="login-password" name="password">

            <button class="button" v-on:click="onLogin">Login</button>
            <button class="button" v-on:click="onLoginAsGuest">Login as Guest</button>
        </div>
    </div>
    `
});

/*
      The Login Page
 */
const HomePage = Vue.component('home-page', {
  data    : function ()
  {
    return {
      user: null
    }
  },
  methods : {
    onStartAll: function ()
    {
      {
        this.$router.push('tests');
      }
    }
  },
  created : function ()
  {
    this.user = Application.User;
  },
  template: `
    <div id="HomePage" class="Page card">

        <div class="card-section text-center">

            <h2 v-if="$root.isLoggedIn">Welcome Back!</h2>

            <h2 v-else>Welcome</h2>

            <p>
                This application will allow you to test multiple websites to check their status.
            </p>

        </div>

    </div>
    `
});

const TestSuiteRow = Vue.component('test-suite-row', {
  props   : [ 'test-suite' ],
  data    : function ()
  {
    return {
      isTesting: false,
    }
  },
  computed: {
    status()
    {
      if (this.isTesting)
      {
        return "TTT"
      } else {
        return ""
      }
    }
  },
  methods : {
    onTest()
    {

    },

    onRemove()
    {

    }
  },
  template: `
    <tr>
        <th style="text-align: left">{{ testSuite }}</th>
        <th v-if="isTesting" style="color: red">&#10004</th>
        <th v-if="!isTesting" style="color: green">&#10004</th>
        <th>
            <button v-on:click="onTest" class="button">Test</button>
            <button v-on:click="onRemove" class="button alert">X</button>
        </th>
    </tr>
    `
});

/*
      The Tests Page
 */
const TestsPage = Vue.component('tests-page', {
  data    : function ()
  {
    return {
      url       : '',
      testSuites: [
        new TestSuite("https://jimmyhowe.com")
      ],
    }
  },
  methods : {
    onAdd: function ()
    {
      this.testSuites.push(new TestSuite(this.url))
    }
  },
  template: `
    <div id="TestPage" class="Page card">

        <div class="card-section">

            <div class="input-group">
                <span class="input-group-label">URL</span>
                <input type="text" v-model="url" class="input-group-field" placeholder="http://example.com">
                <div class="input-group-button">
                    <button v-on:click="onAdd" class="button">+</button>
                </div>
            </div>

        </div>

        <div class="card-section">

            <table id="test-suites" class="hover unstriped">
                <thead>
                <tr>
                    <th style="text-align: left">Url</th>
                    <th style="text-align: center">Status</th>
                    <th style="text-align: center">Options</th>
                </tr>
                </thead>
                <tbody>
                    <test-suite-row v-for="testSuite in testSuites" :test-suite="testSuite" :key="testSuite.url"></test-suite-row>
                </tbody>
            </table>

        </div>

        <div class="card-section">
            <button class="button expanded" onclick="window.location.href='index3.html'">Test all</button>
        </div>

    </div>
    `
});

//
// The Settings Page Component
//
const SettingsPage = Vue.component('settings-page', {
  data    : function ()
  {
    return {
      notifications: true,
      priority     : false
    }
  },
  template: `
    <div id="SettingsPage" class="Page card">

        <div class="card-section">

            <div style="overflow: auto">
                <p style="display: inline">Notifications</p>
                <div class="switch float-right">
                    <input v-model="notifications" class="switch-input" id="notificationsSwitch" type="checkbox" name="notificationsSwitch">
                    <label class="switch-paddle" for="notificationsSwitch">
                        <span class="show-for-sr">Download Kittens</span>
                    </label>
                </div>
            </div>

            <div style="overflow: auto">
                <p style="display: inline">Set as Urgent</p>
                <div class="switch float-right">
                    <input v-model="priority" class="switch-input" id="prioritySwitch" type="checkbox" name="prioritySwitch">
                    <label class="switch-paddle" for="prioritySwitch">
                        <span class="show-for-sr">Download Kittens</span>
                    </label>
                </div>
            </div>

            <div>
                <p>Auto Check Interval</p>

                <select name="autocheck">
                    <option value="every10minutes">Every 10 minutes</option>
                    <option value="every30minutes">Every 30 minutes</option>
                    <option value="every1hours">Every 1 hours</option>
                    <option value="every4hours">Every 4 hours</option>
                    <option value="every8hours">Every 8 hours</option>
                    <option value="every24hours">Every 24 hours</option>
                    <option value="custom">Custom</option>
                    <option value="off">Off</option>
                </select>

            </div>

        </div>

    </div>
    `
});

//
// Boot the router with defined routes
//
const Router = new VueRouter({
  routes: [
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/', component: HomePage },
    { path: '/tests', component: TestsPage },
    { path: '/settings', component: SettingsPage },
  ] // short for `routes: routes`
});

//
// Boot the Application
//
const App = new Vue({
  router  : Router,
  data    : {
    isLoggedIn: false,
    testMode  : false,
  },
  computed: {
    menuItems()
    {
      let menuItems = [];

      if (!this.isLoggedIn || this.testMode)
      {
        menuItems.push(
          { label: "Login", url: "/login" },
          { label: "Register", url: "/register" },
        );
      }

      if (this.isLoggedIn || this.testMode)
      {
        menuItems.push(
          { label: "Home", url: "/" },
          { label: "Tests", url: "/tests" },
          { label: "Settings", url: "settings" },
          { label: "Logout", url: "/logout" },
        );
      }

      console.log(menuItems);

      return menuItems;
    }
  },
  methods : {
    TestModeOn()
    {
      this.menuItems = [
        { label: "Login", url: "/login" },
        { label: "Register", url: "/register" },
        { label: "Home", url: "/" },
        { label: "Tests", url: "/tests" },
        { label: "Settings", url: "settings" },
        { label: "Logout", url: "/logout" },
      ]
    }
  }
}).$mount('#app');