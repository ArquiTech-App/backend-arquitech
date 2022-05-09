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
            
            html: `<h2>Bienvenido a Arquitech</h2> <p>Hola ${name} ${lastName} por favor ingresa al siguiente link para restablecer tu contraseña <a href="http://localhost:8080/clients/restartPassword?token=${token}">arquitech</a></p>`,
        });
        console.log("resp: " + resp);
    } catch (e) {
        console.log("errror: " + e);
    }
}

module.exports = fn;