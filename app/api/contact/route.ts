import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter for nodemailer using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail email address
    pass: process.env.EMAIL_PASS, // Your Gmail app password or OAuth token
  },
});

// Handle POST requests to the /api/contact endpoint
export async function POST(req: NextRequest) {
  // Parse the request body
  const { email, name, message } = await req.json();

  // Validate the request body
  if (!email || !name || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    // Send the email
    await transporter.sendMail({
      from: email, // Sender's email address
      to: 'Info@bytebasha.com', // Recipient's email address
      subject: `Contact Form Submission from ${name}`, // Email subject
      text: `Message from: ${name} <${email}>\n\n${message}`, // Email body
    });

    // Respond with success
    return NextResponse.json({ success: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    // Respond with error
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
