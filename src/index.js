const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");

admin.initializeApp();

// 🔐 Load email credentials from environment config
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

// 📩 Nodemailer setup using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// 📬 Firestore trigger when new contact is added
exports.sendContactEmail = functions.firestore
  .document("contacts/{docId}")
  .onCreate((snap, context) => {
    const data = snap.data();

    const mailOptions = {
      from: `Portfolio Contact Form <${gmailEmail}>`,
      to: gmailEmail, // Sends to your Gmail
      subject: `📬 New Message from ${data.name}`,
      text: `
You received a new message from your portfolio contact form:

👤 Name: ${data.name}
📧 Email: ${data.email}
📝 Message: 
${data.message}
      `,
    };

    // ✅ Send the email
    return transporter.sendMail(mailOptions)
      .then(() => console.log("📨 Email sent successfully"))
      .catch((error) => console.error("❌ Error sending email:", error));
  });
