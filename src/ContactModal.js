
import React, { useRef } from "react";
import "./ContactModal.css";
import emailjs from "@emailjs/browser";

const ContactModal = ({ isOpen, onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yszax07',         
        'template_pqi0j37',         
        form.t,
        'khsKxkyCfOt6kpqMl'        
      )
      .then(
        () => {
          console.log("Message sent successfully");
          alert("Message sent!");
        },
        (error) => {
          console.error("Message failed to send:", error);
          alert("Failed to send message.");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <center><h2>Contact Me</h2></center>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Your Name" required />

          <label>Email</label>
          <input type="email" name="user_email" placeholder="Your Email" required />

          <label>Message</label>
          <textarea name="message" placeholder="Type your message here..." required />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
