import { useRef, useState } from "react";
import { postContact } from "../api/client";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = ({ hideHeading = false }) => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Prepare payload for backend contact API
    const formData = new FormData(form.current);
    const fullName = formData.get("full_name") || "";

    const payload = {
      fullName: fullName.trim(),
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      subject: formData.get("service_type") || "Service Inquiry",
      message: formData.get("message") || "",
      category: "general",
    };

    postContact(payload)
      .then(() => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus(null), 5000);
      })
      .catch((err) => {
        console.error("Backend contact failed:", err);
        setStatus("error");
        setTimeout(() => setStatus(null), 5000);
      });
  };

  const socialLinks = [
    {
      href: "https://wa.me/919999999999",
      icon: FaWhatsapp,
      label: "WhatsApp Support",
      detail: "Chat with us instantly",
      bg: "bg-green-50 hover:bg-green-100",
      iconColor: "text-green-600",
    },
    {
      href: "mailto:support@aashipath.com",
      icon: FaEnvelope,
      label: "Email Us",
      detail: "support@aashipath.com",
      bg: "bg-red-50 hover:bg-red-100",
      iconColor: "text-red-500",
    },
    {
      href: "https://linkedin.com",
      icon: FaLinkedin,
      label: "LinkedIn",
      detail: "Connect professionally",
      bg: "bg-blue-50 hover:bg-blue-100",
      iconColor: "text-blue-700",
    },
    {
      href: "https://instagram.com",
      icon: FaInstagram,
      label: "Instagram",
      detail: "Follow our updates",
      bg: "bg-pink-50 hover:bg-pink-100",
      iconColor: "text-pink-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        {!hideHeading && (
          <div className="text-center mb-14">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Contact <span className="text-sky-600">Us</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Connect with our team for laboratory equipment, validation services,
              technical support, and customized solutions.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Reach Out Directly
            </h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Ashipath Scientific Lab Solutions provides reliable laboratory
              equipment, validation services, and technical support across India.
            </p>

            <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-sky-50 border border-sky-100">
              <FaMapMarkerAlt className="text-sky-600 mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Our Location</p>
                <p className="text-gray-600 text-sm">Bangalore, Karnataka, India</p>
              </div>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`flex items-center gap-4 p-4 rounded-xl ${link.bg} transition-all duration-300 hover:scale-[1.02]`}
                >
                  <link.icon className={`text-2xl ${link.iconColor} shrink-0`} />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{link.label}</p>
                    <p className="text-xs text-gray-500">{link.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Request for Quote
            </h3>
            <p className="text-xs text-gray-500 mb-6">Fields marked with <span className="text-red-500 font-semibold">*</span> are required</p>

            {status === "success" && (
              <div className="mb-4 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800 font-medium">
                Quote request sent successfully! We&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800 font-medium">
                Failed to send request. Please try again or email us directly.
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name *"
                  required
                  className="input-field"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  className="input-field"
                />
                <input
                  type="text"
                  name="industry"
                  placeholder="Industry"
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="input-field"
                />
                <input
                  type="text"
                  name="service_type"
                  placeholder="Type of Service *"
                  className="input-field"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="input-field"
                />
                <input
                  type="text"
                  name="state_country"
                  placeholder="State / Country"
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input-field"
                />
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Zip Code"
                  className="input-field"
                />
              </div>

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your requirement... *"
                className="input-field resize-none"
                required
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full btn-primary !rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
