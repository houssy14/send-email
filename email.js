const nodemailer = require('nodemailer');

// Create a Nodemailer transporter with Ethereal SMTP details
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'eloisa.conroy49@ethereal.email',
    pass: 'F4ZsXJ7Eb9xKWwUpqV',
  },
});
const mailOptions = {
  from: 'touhamiihossy@gmail.com',
  to: 'touhamihoussem079@gmail.com',
  subject: 'Test Email with houssem',
  text: 'Certainly! A sticky header is a common feature on websites where the header remains fixed at the top of the page as the user scrolls down. Here',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);

    // Log Ethereal link to view the sent email
    console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
  }
});