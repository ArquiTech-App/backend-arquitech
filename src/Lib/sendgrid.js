const sgMail = require('@sendgrid/mail');

require('dotenv').config();

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey('SENDGRID_API_KEY');

module.exports = sgMail;