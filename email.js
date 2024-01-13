const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

function sendEmail(to, subject, text, callback) {
    const mailOptions = {
        from: 'touhamiihossy@gmail.com',
        to: 'touhamihoussem079@gmail.com',
        subject: 'esay way',
        text: "hello world"
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            callback(error);
        } else {
            callback(null, info.messageId);
        }
    });
}

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    sendEmail(to, subject, text, (error, messageId) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(`Email sent successfully. Message ID: ${messageId}`);
        }
    });
});