const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kerminz@googlemail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kerminz@googlemail.com',
        subject: 'Bye bye',
        text: `By bye ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}