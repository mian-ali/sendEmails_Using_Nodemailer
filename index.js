const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
  console.log(req.body);
  //Formating content to be send
  var emailcontent = `<h3> Contact Details</h3>
                     <ul>
                      <li>name: ${req.body.name}</li>
                      <li>email : ${req.body.email}</li>
                     </ul>
                     <h2>Message</h2>
                      <p>message: ${req.body.subject}</p>
                          `;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mian41935@gmail.com',
      pass: 'XYZ',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  //Preparing the mailOptions object
  var mailOptions = {
    from: 'dev.aliahmad0@gmail.com',
    to: 'dev.aliahmad0@gmail.com',
    subject: 'New Message',
    text: req.body.subject,
    html: emailcontent,
  };
  //Sending email using transporter function
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
