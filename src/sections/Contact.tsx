import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I am actively searching for internship opportunities and am open to
        connecting with professionals in the field. If you have any
        opportunities or would like to discuss potential collaborations, feel
        free to reach out! You can connect with me on LinkedIn or email me
        directly. My inbox is always open, and I{"’"}ll do my best to respond
        promptly!
      </p>
      <div className="contact-cta">
        <Button link="mailto:abhinavgangwar17@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
