module.exports = function () {
  var config = {
    "auth": {
      "username": "<username>",
      "access_key": "<access-key>"
    },
    "browsers": [
      {
        "browser": "chrome",
        "os": "Windows 10",
        "versions": ["78", "77"]
      }
    ],
    "run_settings": {
      "cypress" : "/path/to/cypress_json",
      "specs": [
          "integration/examples/*.js"
      ],
      "plugins": [
          "plugins/*.js"
      ],
      "supports": [
          "support/*.js"
      ],
      "fixtures": [
          "fixtures/*.js"
      ],
      "project": "project-name",
      "customBuildName": "build-name"
    },
    "connection_settings": {
      "local": false
    }
  }
  var EOL = require('os').EOL
  var file = [
    JSON.stringify(config, null, 4)
  ].join(EOL)
  return file
}
