const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "darshan.r@crestinfosystems.net",
    subject: "Thank you for joing us!",
    text: `Welcome to the app, ${name}!`,
  });
};

const sendDeleteEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "darshan.r@crestinfosystems.net",
    subject: "Good bye and thankyou for your time!",
    text: `We would like to hear some feedbacks from you, ${name}!`,
  });
};
module.exports = { sendWelcomeEmail, sendDeleteEmail };
