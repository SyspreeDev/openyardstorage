import nodemailer from "nodemailer";

export async function POST(req) {
 try {
  const body = await req.json();
  const { name, email, phone, message } = body;

  const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
   }
  });

  await transporter.sendMail({
   from: `"${name}" <${process.env.EMAIL_USER}>`,
   replyTo: email,
   to: process.env.EMAIL_USER,
   subject: "New Contact Form",
   text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
   `
  });

  return Response.json({ success: true });

 } catch (error) {
  console.log(error);
  return Response.json({ success: false }, { status: 500 });
 }
}