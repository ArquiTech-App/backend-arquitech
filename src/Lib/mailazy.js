const MailazyClient = require('mailazy-node');
require('dotenv').config();
const client = new MailazyClient({ accessKey: process.env.MAILAZYKEY, accessSecret: process.env.MAILAZYSECRET });

const fn = async (email, lastName, name, token) => {
    console.log(email);
    try {
        const resp = await client.send({
            to: email, // required
            from: 'sender@deveckor.com', // Use domain you verified, required
            subject: 'Bienvenido a Arquitech...', // required
            
            text: `Bienvenido a Arquitech
            Hola ${name} ${lastName} por favor ingresa al siguiente link para restablecer tu contraseña http://localhost:3000/customer/restartPassword?token=${token}`,
        });
        console.log("resp: " + resp);
    } catch (e) {
        console.log("errror: " + e);
    }
}

module.exports = fn;