import sendEmail from "../utils/sendEmail.js";

export const handleContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

 
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Please fill all fields." });
  }

  try {
    
    const htmlContent = `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #F59E0B;">New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9;">
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      </div>
    `;

    //Send Email using Utility
    await sendEmail({
      to: process.env.BREVO_USER, 
      subject: `Portfolio: ${subject}`,
      html: htmlContent,
    });

    res.status(200).json({ message: "Message sent successfully!" });

  } catch (error) {
    console.error("Contact Controller Error:", error);
    res.status(500).json({ message: "Failed to send message. Try again later." });
  }
};