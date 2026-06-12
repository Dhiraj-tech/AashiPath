import express from "express";
import {
  registerAdmin,
  loginAdmin,
  verifyToken,
} from "../controllers/authController.js";
import {
  getContacts,
  getContact,
  deleteContact,
  updateContactStatus,
  sendAdminReply,
} from "../controllers/contactController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Auth routes (public)
router.post("/auth/register", registerAdmin);
router.post("/auth/login", loginAdmin);

// Admin routes (protected)
router.get("/verify", authMiddleware, verifyToken);
router.get("/contacts", authMiddleware, getContacts);
router.get("/contacts/:id", authMiddleware, getContact);
router.patch("/contacts/:id/status", authMiddleware, updateContactStatus);
router.post("/contacts/:id/reply", authMiddleware, sendAdminReply);
router.delete("/contacts/:id", authMiddleware, deleteContact);

export default router;
