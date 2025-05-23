const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Set up transporter using your email provider (e.g. Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_app_password"
  }
});

exports.sendContactEmail = functions.firestore
  .document("contacts/{docId}")
  .onCreate((snap, context) => {
    const data = snap.data();

    const mailOptions = {
      from: "your_email@gmail.com",
      to: "your_email@gmail.com",
      subject: `New Contact Form Submission from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
    };

    return transporter.sendMail(mailOptions);
  });
