var Nightmare = require('nightmare');
var nightmare = new Nightmare();
nightmare
  .goto('https://www.patrickshampine.com/contact')
    .type('#wg_email', 'patrick.shampine@gmail.com')
    .type('#wg_name', 'Patrick Shampine')
    .type('#wg_subject', 'Nightmare Test')
    .type('#wg_message', 'This is the subject, yo.')
    .click('button.btn')
  .run();