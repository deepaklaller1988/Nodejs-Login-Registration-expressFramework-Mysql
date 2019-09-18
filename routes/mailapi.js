var nodemailer = require('nodemailer');


function mymail(userDetails){
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email id',
    pass: 'email password'
  }
});

var mailOptions = {
  from: 'user email id',
  to: userDetails.email,
  subject: 'Verification',
  html:"<h1 style='color:blue;'>Welcome to MyApp</h1><p>You have sucessfully registered on this application , your login credentials are below</p><h3>username:"+userDetails.email+"</h3><h3>password:"+userDetails.password+"</h3><h1>Click on the link below to activate account</h1>http://localhost:3000/verifyusers?email="+userDetails.email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

module.exports={'mymail':mymail}