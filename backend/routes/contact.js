require('dotenv').config();

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

router.post('/', 
  body('fname').isLength({ min: 2 }),
  body('email').isEmail(),
  body('message').isLength({ min: 2 }),

  function(req, res){
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const fname = req.body.fname;
    const email = req.body.email;
    const message = req.body.message;

    var transporter = nodemailer.createTransport({
    service: 'gmail',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
      }
    });

  var mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: process.env.SITE_NAME + ' Contact Us Form Submission',
    html: 'Name: ' + fname + '<br />Email Address: ' + email + '<br />Message: ' + message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  var obj = {};
  res.send("{'success': 1 }");
});


module.exports = router;
