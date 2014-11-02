var Nightmare = require('nightmare'),
    nightmare = new Nightmare(),
    Mailgun   = require('mailgun'),
    config    = require('./config.js'),
    sites     = config.sites;

nightmare
  .goto('https://www.patrickshampine.com/contact')
    .type('#wg_email', 'patrick.shampine@gmail.com')
    .type('#wg_name', 'Patrick Shampine')
    .type('#wg_subject', 'Nightmare Test')
    .type('#wg_message', 'This is the subject, yo.')
    .click('button.btn')
  .run(function(err, nightmare){
    console.log('Test complete');
    // sendMailgun();
  });

function sendMailgun() {
  var mailgun = new Mailgun({apiKey: api_key, domain: domain});

  var data = {
    from: config.mailgun.from,
    to: config.mailgun.to,
    subject: 'Anxious.js Daily Report',
    text: 'todo:: compile the results here.'
  }

  mailgun.messages().send(data);

}