/*
==========================================================================================
  Selectors
==========================================================================================
*/

// initialize selectors object
const selectors = {
  global: {}
};

// alias global selector key
const g = selectors.global;

// set global selectors
g.html   = document.querySelector("html"),
g.body   = g.html.querySelector("body"),
g.header = g.body.querySelector(".header"),
g.main   = g.body.querySelector(".main"),
g.footer = g.body.querySelector(".footer");

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default selectors;
