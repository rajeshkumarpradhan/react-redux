
const {Access} = require('./commonActions/Access.js');
module.exports = {
  before : function(browser) {
    Access(browser)
  },
    '[1] Demo test' : function (browser) {
      browser
        .waitForElementPresent('.container .list-group', 2000)
        .assert.containsText('.panel_card', 'Basic Panel')
        .end();
    }
  };