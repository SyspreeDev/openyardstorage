import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const { name, email, phone, message } = req.body;

    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // temp (later change)
      to: "sales@oss-me.com",
      subject: "New Contact Form",
      html: `
        <h3>New Contact Form</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}