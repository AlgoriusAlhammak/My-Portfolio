// api/sendEmail.js
const nodemailer = require('nodemailer');

export default async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message } = req.body;

    // Set up your email transport using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "hadielzeidi@gmail.com", 
        pass: "ruvl kqna xiwm otxe", 
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Message from ${firstName} ${lastName}`,
      text: `Phone: ${phone}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Raven sent!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error sending Raven.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
