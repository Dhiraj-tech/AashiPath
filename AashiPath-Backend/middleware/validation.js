import { body, validationResult } from "express-validator";

// Validation rules
export const validateBooking = [
  body("firstName").trim().notEmpty().withMessage("First name is required"),
  body("lastName").trim().notEmpty().withMessage("Last name is required"),
  body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
  body("phone")
    .trim()
    .notEmpty()
    .matches(/^[\d\s\-\+\(\)]+$/)
    .withMessage("Valid phone number is required"),
  body("company").trim().notEmpty().withMessage("Company name is required"),
  body("serviceType").notEmpty().withMessage("Service type is required"),
  body("industryType").notEmpty().withMessage("Industry type is required"),
  body("message")
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage("Message must be between 10 and 1000 characters"),
];

export const validateContact = [
  body("firstName").trim().notEmpty().withMessage("First name is required"),
  body("lastName").trim().notEmpty().withMessage("Last name is required"),
  body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
  body("phone").trim().notEmpty().withMessage("Phone number is required"),
  body("subject").trim().notEmpty().withMessage("Subject is required"),
  body("message")
    .trim()
    .isLength({ min: 5 })
    .withMessage("Message must be at least 5 characters"),
];

export const validateService = [
  body("id").isInt().withMessage("Service ID must be an integer"),
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("description").trim().notEmpty().withMessage("Description is required"),
  body("category").trim().notEmpty().withMessage("Category is required"),
];

export const validateIndustry = [
  body("id").isInt().withMessage("Industry ID must be an integer"),
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("description").trim().notEmpty().withMessage("Description is required"),
];

export const validateTeam = [
  body("firstName").trim().notEmpty().withMessage("First name is required"),
  body("lastName").trim().notEmpty().withMessage("Last name is required"),
  body("title").trim().notEmpty().withMessage("Job title is required"),
  body("department")
    .isIn([
      "Executive",
      "Sales",
      "Technical Support",
      "Engineering",
      "Operations",
      "HR",
      "Marketing",
    ])
    .withMessage("Invalid department"),
];

export const validateLogin = [
  body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

// Middleware to handle validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  next();
};
