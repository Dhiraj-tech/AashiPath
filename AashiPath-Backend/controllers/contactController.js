import Contact from "../models/Contact.js";
import { asyncHandler } from "../middleware/errorHandler.js";
import { sendEmail } from "../utils/email.js";

const getContactFullName = (contact) =>
  contact.fullName || [contact.firstName, contact.lastName].filter(Boolean).join(" ");

// @desc Get all contacts
// @route GET /api/contacts
// @access Private
export const getContacts = asyncHandler(async (req, res) => {
  const { status, category, sortBy = "-createdAt", page = 1, limit = 10 } = req.query;

  let query = {};
  if (status) query.status = status;
  if (category) query.category = category;

  const contacts = await Contact.find(query)
    .sort(sortBy)
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  const total = await Contact.countDocuments(query);

  res.json({
    success: true,
    data: contacts,
    pagination: {
      total,
      pages: Math.ceil(total / limit),
      currentPage: page,
    },
  });
});

// @desc Get single contact
// @route GET /api/contacts/:id
// @access Private
export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      error: "Contact not found",
    });
  }

  res.json({
    success: true,
    data: contact,
  });
});

// @desc Create contact
// @route POST /api/contacts
// @access Public
export const createContact = asyncHandler(async (req, res) => {
  const { fullName, email, phone, subject, message, category } = req.body;

  const contact = await Contact.create({
    fullName,
    email,
    phone,
    subject,
    message,
    category,
  });

  // Send confirmation email
  try {
    await sendEmail({
      to: email,
      subject: "We received your message - AashiPath Scientific Solutions",
      template: "contactConfirmation",
      data: {
        fullName,
        subject,
      },
    });
  } catch (emailError) {
    console.error("Error sending confirmation email:", emailError);
  }

  // Send notification to admin
  try {
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form: ${subject}`,
      template: "contactNotification",
      data: {
        fullName,
        email,
        subject,
        category,
      },
    });
  } catch (emailError) {
    console.error("Error sending admin notification:", emailError);
  }

  res.status(201).json({
    success: true,
    data: contact,
    message: "Message sent successfully. We will get back to you soon!",
  });
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access Private
export const updateContact = asyncHandler(async (req, res) => {
  let contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      error: "Contact not found",
    });
  }

  contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json({
    success: true,
    data: contact,
  });
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access Private
export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      error: "Contact not found",
    });
  }

  res.json({
    success: true,
    data: {},
    message: "Contact deleted successfully",
  });
});

// @desc Update contact status
// @route PATCH /api/admin/contacts/:id/status
// @access Private (Admin only)
export const updateContactStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  if (!["new", "replied", "resolved"].includes(status)) {
    return res.status(400).json({
      success: false,
      message: "Invalid status value",
    });
  }

  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  );

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: "Contact not found",
    });
  }

  res.json({
    success: true,
    data: contact,
    message: "Contact status updated successfully",
  });
});

// @desc Send admin reply to contact
// @route POST /api/admin/contacts/:id/reply
// @access Private (Admin only)
export const sendAdminReply = asyncHandler(async (req, res) => {
  const { response } = req.body;

  if (!response || response.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: "Response message is required",
    });
  }

  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: "Contact not found",
    });
  }

  // Update contact with response
  contact.response = response;
  contact.respondedAt = new Date();
  contact.status = "replied";
  await contact.save();

  // Send reply email to user
  try {
    await sendEmail({
      to: contact.email,
      subject: `Re: ${contact.subject} - AashiPath Scientific Solutions`,
      template: "adminReply",
      data: {
        fullName: getContactFullName(contact),
        subject: contact.subject,
        message: response,
      },
    });
  } catch (emailError) {
    console.error("Error sending reply email:", emailError);
    return res.status(500).json({
      success: false,
      message: "Contact updated but failed to send reply email",
    });
  }

  res.json({
    success: true,
    data: contact,
    message: "Reply sent successfully",
  });
});
