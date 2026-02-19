import sendEmail from "../utils/sendEmail.js";

export const handleContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Please fill all fields." });
  }

  try {
    
    await sendEmail({
      fromUser: name,
      userEmail: email,
      subject: subject,
      html: `<p>${message}</p>`, 
    });

    res.status(200).json({ message: "Message sent successfully!" });

  } catch (error) {
    console.error("Controller Error:", error.message);
    res.status(500).json({ message: "Server error, please try again." });
  }
};