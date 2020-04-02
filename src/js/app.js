/*
==========================================================================================
  Dependencies
==========================================================================================
*/

// global objects
import Browser from "./global/browser.js";
import Constants from "./global/constants.js";
import Endpoints from "./global/endpoints.js";
import Models from "./global/models.js";
import Selectors from "./global/selectors.js";

// global modules
import Helpers from "./module/helpers.js";
import Utilities from "./module/utilities.js";

/*
==========================================================================================
  Aliases
==========================================================================================
*/

const _p = _private;
const b = Browser;
const c = Constants;
const e = Endpoints;
const m = Models;
const s = Selectors;

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const App = {};

/*
==========================================================================================
  Private Functions
==========================================================================================
*/

const _private = {

  initialize() {

    // remove `no-js` class
    s.global.html.classList.remove("no-js");

  }

};

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default App;
