const  nodemailer = require('nodemailer');
 const transporter = nodemailer.createTransport({
    pool: true,
    host: "joblik4@gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
        user: "joblik4@gmail.com",
        pass: "Joblik1234",
    },
});

module.exports = transporter