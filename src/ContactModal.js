import React, { useRef, useState } from "react";
import "./ContactModal.css";
import emailjs from "@emailjs/browser";

const ContactModal = ({ isOpen, onClose }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_tjj5o9k",    
        "template_ynjnrtd",    
        form.current,
        "khsKxkyCfOt6kpqMl"     
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setLoading(false);
          onClose(); 
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message.");
          setLoading(false);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>Contact Me</h2>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          />

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;