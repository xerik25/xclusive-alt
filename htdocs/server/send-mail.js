var sendgrid  = require('sendgrid')('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');

function sendEmail(body){
  //sanitize
  var name = body.name || '';
  var company = body.company || '';
  var phone = body.phone || '';
  var email = body.email || '';
  var notes = body.note || '';

  var MAILTO = 'landon.cline@vml.com';

  sendgrid.send({
    to:       MAILTO,
    from:     'xclusive-contact-form@xclusive-event-services.com',
    subject:  'Contact Form Submission',
    html:     '<h2>Contact Info:</h2>' +
    '<p>Name: ' + name + '</p>' +
    '<p>Company: ' + company + '</p>' +
    '<p>Phone: ' + phone + '</p>' +
    '<p>Email: ' + email + '</p>' +
    '<p>Note: ' + notes + '</p>'

  }, sendgridCallback);
}

function sendgridCallback(err, json){
  if (err) { return console.error(err); }
  console.log(json);
}

module.exports = sendEmail;