var Nightmare = require('nightmare'),
    Mailgun   = require('mailgun'),
    config    = require('./config.js'),
    sites     = config.sites,
    fields    = '',
    nightmare = '';


for(var i = 0; i < sites.length; i++) {

  nightmare = new Nightmare();
  nightmare.goto(sites[i]['url']);

  fields = sites[i]['fields'];

  for(var j = 0; j < fields.length; j++) {
    nightmare.type(fields[j]['id'],fields[j]['text']);
  }

  nightmare.click(sites[i]['submit']);

  nightmare.run(function(err, nightmare) {
    console.log('done');
  });

}



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