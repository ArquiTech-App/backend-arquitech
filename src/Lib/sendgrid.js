const sgMail = require('@sendgrid/mail');

require('dotenv').config();

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);


function mailResetPassword({email, firstName, lastName}) {
    console.log('hola');
    const message = {
        to: email, 
        from: {
            name: 'Arquitech',
            email: 'roenma@gmail.com'
        },
        subject: 'Reset Password',
        template_id: 'd-8e892e5b2455490cb1ac587f86a29e46',
        dynamic_template_data: {
            firstName,
            lastName,
            url: `http://localhost:8080/activate-account?token=`
        }
    }
    
        
        console.log('pppp');
        console.log(sgMail.send(message));
       return sgMail.send(message);
    
 }

module.exports = {
    mailResetPassword
}