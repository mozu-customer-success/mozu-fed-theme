
// TODO: subset of the Mozu yeoman generator


var fs      = require('grunt').file
  , _       = require('lodash')
  , path    = require('path')
  , prompt  = require('prompt')
  ;


var paths = {
      mozuConfig: path.resolve(process.cwd(), 'mozu.config.json')
    , mozuConfigBase: path.resolve(process.cwd(), 'mozu.config.json.base')
    }
  ;


var baseConfig = {
      baseUrl: "https://home.mozu.com"
    , developerAccountId: null
    , developerAccount: { emailAddress: null }
    , workingApplicationKey: null
    };


prompt.start();


// check if the config file exists
if (!fs.exists(paths.mozuConfig)) {
  console.log("BUGGER");


  // TODO: figure out how zetlen wrote the portion of generator tool for capturing dev account details

  prompt.get({
    properties: {
      name: {
        // pattern: ,
        description: 'enter your email',
        message: 'Ente',
        required: true
      }
    }
  }, function(err, result) {

  });

} else {
  console.log("IT'S ALIVE!!!");
}

