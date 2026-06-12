import express from "express";
import { createContact } from "../controllers/contactController.js";
import { validateContact, handleValidationErrors } from "../middleware/validation.js";

const router = express.Router();

// Public route
router.post("/", validateContact, handleValidationErrors, createContact);

export default router;
