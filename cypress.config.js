const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dpnct3',

  viewportHeight : 1080,
  viewportWidth : 1920,
  video: false,
  reporter: 'cypress-multi-reporters',
  projectId: "q3ngxn",
  reporterOptions: {
     configFile: 'reporter-config.json',
  },
  experimentalWebKitSupport : true,
  env : {
    username: 'Cytest@mailinator.com',
    password: 'Cytest',
    apiUrl: 'https://conduit-api.bondaracademy.com/api',
  },

  retries: {
    runMode: 2,
    openMode: 0
  },

  e2e: {
    setupNodeEvents(on, config) {
      const username = process.env.DB_USERNAME 
      const password = process.env.PASSWORD 

      /*if (!username || !password) {
        throw new Error('Environment variables DB_USERNAME and PASSWORD must be set');
      }*/

      config.env = {username,password}
      return config

    },

    baseUrl: 'https://conduit.bondaracademy.com/',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
  },
});
