const nodemailer = require('nodemailer');

export default async (req, res) => {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, message } = req.body;

        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,   
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Message from ${firstName} ${lastName}`,
            text: `You have received a new message from:
                    Name: ${firstName} ${lastName}
                    Email: ${email}
                    Phone: ${phone}
                    Message: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: 'Raven sent!' });
        } catch (error) {
            console.error('Error sending email:', error); // Log error for debugging
            res.status(500).json({ success: false, message: 'Error sending Raven.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
