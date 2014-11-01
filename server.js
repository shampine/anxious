var Nightmare = require('nightmare');
var nightmare = new Nightmare();
nightmare
  .goto('https://www.gosteady.io')
    .type('#email', 'patrick.shampine@gmail.com')
    .click('button.btn')
  .run();