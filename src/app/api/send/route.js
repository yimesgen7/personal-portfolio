import { Resend } from "resend";

export async function POST(req) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const { name, email, message } = await req.json();
    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "your@email.com",
      subject: "Portfolio Contact Form",
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}