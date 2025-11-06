import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  // Stäng toast automatiskt efter 3 sek
  useEffect(() => {
    if (!toast.show) return;
    const t = setTimeout(() => setToast((x) => ({ ...x, show: false })), 3000);
    return () => clearTimeout(t);
  }, [toast.show]);

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "98ca52cc-47af-40ff-8f99-c4fecc85af93");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        showToast("success", "Your message was sent successfully!");
        event.target.reset();
      } else {
        showToast("error", "Something went wrong. Please try again.");
      }
    } catch {
      showToast("error", "Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* TOAST */}
      <div
        className={`toast ${toast.show ? "show" : ""} ${toast.type}`}
        role="status"
        aria-live="polite"
      >
        <span className="toast-dot" aria-hidden />
        <span className="toast-text">{toast.message}</span>
        <button
          className="toast-close"
          onClick={() => setToast((x) => ({ ...x, show: false }))}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>

      {/* CONTACT-SECTION */}
      <div className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
        </div>

        <div className="contact-section">
          <div className="contact-left">
            <h1>Let´s talk</h1>
            <p>
              I am currently open to new opportunities and collaborations.
              Whether you have a question, a project idea, or just want to say hello,
              feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-detail"><p>Email: linnea.backgaard@gmail.com</p></div>
              <div className="contact-detail"><p>Phone: +46 739 47 96 64</p></div>
              <div className="contact-detail"><p>Location: Malmö, Sweden</p></div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="contact-right" noValidate>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your Name" required />

            <label>Your Email</label>
            <input type="email" name="email" placeholder="Enter your Email" required />

            <label>Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message" required />

            <button type="submit" className="contact-submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
