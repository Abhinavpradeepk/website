import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./ContactSection.css"; // We'll create this to hold the styling

const ContactSection = () => {
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
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact-section" className="contact-wrapper">
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">Have a question or want to work together? Let's connect.</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-group">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="contact-input"
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="contact-input"
            />
          </div>

          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="contact-textarea"
            />
          </div>

          <motion.button 
            type="submit" 
            className="contact-submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
