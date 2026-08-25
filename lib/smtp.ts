import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface SendEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail({ name, email, subject, message }: SendEmailParams) {
  const to = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

  const info = await transporter.sendMail({
    from: `"${name}" <${process.env.SMTP_USER}>`,
    replyTo: email,
    to,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 8px;">
          New message from portfolio
        </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 16px 0;" />
        <p style="white-space: pre-wrap; color: #334155;">${message}</p>
      </div>
    `,
  });

  return info;
}
