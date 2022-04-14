const sgMail = require('@sendgrid/mail');

require('dotenv').config();

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey('SENDGRID_API_KEY');

function mailResetPassword({email, firstName, lastName, token}) {
    const message = {
        to: email, 
        from: {
            name: 'cris',
            email: 'cristianluru@gmail.com'
        },
        subject: 'Reset Password',
        template_id: 'd-8e892e5b2455490cb1ac587f86a29e46',
        dynamic_template_data: {
            firstName,
            lastName,
            token
        }
    }
    return sgMail.send(message);
 }

module.exports = {
    sgMail,
    mailResetPassword
}