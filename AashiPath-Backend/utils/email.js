import nodemailer from "nodemailer";

let transporter;

// Initialize transporter
const initializeTransporter = () => {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Email templates
const getEmailTemplate = (template, data) => {
  const templates = {
    bookingConfirmation: {
      subject: "Booking Confirmation - AashiPath",
      html: `
        <h2>Thank you for your booking, ${data.firstName}!</h2>
        <p>We have received your booking request and will contact you soon.</p>
        <p><strong>Booking ID:</strong> ${data.bookingId}</p>
        <p>Our team will reach out to you within 24 hours.</p>
        <p>Best regards,<br>AashiPath Scientific Solutions Team</p>
      `,
    },
    bookingNotification: {
      subject: `New Booking from ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New Booking Received</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Service Type:</strong> ${data.serviceType}</p>
        <p>Please review this booking in the admin panel.</p>
      `,
    },
    contactConfirmation: {
      subject: "We received your message",
      html: `
        <h2>Thank you for contacting us, ${data.firstName}!</h2>
        <p>We have received your message regarding: <strong>${data.subject}</strong></p>
        <p>Our team will get back to you as soon as possible.</p>
        <p>Best regards,<br>AashiPath Scientific Solutions Team</p>
      `,
    },
    contactNotification: {
      subject: `New Contact Form: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Category:</strong> ${data.category}</p>
        <p>Please review this message in the admin panel.</p>
      `,
    },
    adminReply: {
      subject: `Re: ${data.subject}`,
      html: `
        <h2>Response to your inquiry</h2>
        <p>Dear ${data.firstName},</p>
        <p>Thank you for reaching out to us regarding: <strong>${data.subject}</strong></p>
        <p>${data.message}</p>
        <p>If you have any further questions, please don't hesitate to contact us.</p>
        <p>Best regards,<br>AashiPath Scientific Solutions Team</p>
      `,
    },
  };

  return templates[template] || null;
};

// Send email function
export const sendEmail = async ({ to, subject, template, data }) => {
  try {
    // Initialize transporter if not already done
    if (!transporter) {
      initializeTransporter();
    }

    const emailTemplate = getEmailTemplate(template, data);

    if (!emailTemplate) {
      throw new Error(`Email template '${template}' not found`);
    }

    const mailOptions = {
      from: `AashiPath <${process.env.SMTP_USER}>`,
      to: to,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
