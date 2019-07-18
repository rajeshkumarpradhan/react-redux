module.exports = {
    Access: (browser) => giveAccess(browser)
  };
  const giveAccess = (browser, user) => {
    browser
     .url('http:localhost:3000');
  };