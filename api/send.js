import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, company, message } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sales@oss-me.com",
      subject: "New Contact Form",
      html: `
        <h3>New Contact Form</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}