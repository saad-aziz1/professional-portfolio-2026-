import { Resend } from 'resend';
import dotenv from 'dotenv'; 
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ fromUser, userEmail, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', 
      to: [process.env.RESEND_VERIFIED_EMAIL], 
      subject: `Portfolio: ${subject}`,
      
      html: `
        <h3>New Message from ${fromUser}</h3>
        <p><strong>User Email:</strong> ${userEmail}</p>
        <hr />
        ${html}
      `,
    });

    if (error) throw new Error(error.message);
    return data;
  } catch (error) {
    console.error("Resend Error:", error.message);
    throw error;
  }
};

export default sendEmail;