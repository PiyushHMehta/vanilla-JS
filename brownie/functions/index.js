const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'piyush.mehta22@spit.ac.in',
        pass: 'gPTpqr67'
    }
});

exports.sendOrderEmail = functions.https.onCall((data, context) => {
    const mailOptions = {
        from: data.userEmail,
        to: 'jainpiyush1450@gmail.com',
        subject: 'New Brownie Order',
        text: `You have a new order from ${data.userEmail}. Number of pieces: ${data.pieces}`
    };

    return transporter.sendMail(mailOptions)
        .then(() => {
            return { message: 'Email sent successfully' };
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            throw new functions.https.HttpsError('internal', 'Unable to send email');
        });
});
