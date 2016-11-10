/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'myapp',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyDMOAxqnnIAZJ42kxz4Smc_dssjIqunijU",
      authDomain: "mycars-10502.firebaseapp.com",
      databaseURL: "https://mycars-10502.firebaseio.com",
      storageBucket: "mycars-10502.appspot.com",
      messagingSenderId: "703996006369"

    },
  
    /*
    contentSecurityPolicy:{'connect-src':"'self' wss://*.firebaseio.com"},
    firebase: 'https://mycars-10502.firebaseio.com/',
    baseURL:'/',
 */
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    /*
    ENV.contentSecurityPolicy = {
      'script-src': "'self' https://api.github.com"
    }
    */
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
