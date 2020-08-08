const nodemailer = require("nodemailer");

// Mail Helper class to send email's via smtp using nodmailer
class Mail {
  transport = null;

  constructor(smtp) {
    this.transport = nodemailer.createTransport(smtp);
    // verify connection configuration
    this.transport.verify((error, success) => {
      if (error) {
        console.log(error);
        this.transport = null;
      }
    });
  }

  send(mailOptions) {
    // if transport is not created
    if (!this.transport)
      return console.log("Something went wrong with verifying the smtp host");

    this.transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Email sent: " + info.response);
    });
  }
}

module.exports = new Mail({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  // secure: true, // uses the ssl and port 465
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});
