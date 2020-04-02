/*
==========================================================================================
  Browser
==========================================================================================
*/

// initialize browser object
const browser = {
  dispatch: {},
  environment: {
    development: "development",
    test: "test",
    staging: "staging",
    production: "production"
  },
  events: {
    click: "click",
    change: "change",
    focusin: "focusin",
    focusout: "focusout",
    input: "input",
    keydown: "keydown",
    keyup: "keyup",
    submit: "submit",
    wheel: "wheel"
  },
  os: {
    android: !!navigator.userAgent.toLowerCase().match(/android/),
    ios: !!navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod/),
    linux: !!navigator.userAgent.toLowerCase().match(/linux/),
    mac: !!navigator.userAgent.toLowerCase().match(/mac/),
    windows: !!navigator.userAgent.toLowerCase().match(/windows/)
  },
  request: {
    get: "get",
    post: "post",
    patch: "patch",
    delete: "delete"
  }
};

// setup event dispatchers
Object.keys(browser.events).forEach((event) => {
  browser.dispatch[event] = new Event(event, { bubbles: true, cancelable: true });
});

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default browser;
