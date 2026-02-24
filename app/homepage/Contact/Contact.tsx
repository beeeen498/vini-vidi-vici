"use client";

import { useState } from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setIsClicked(true);

    // here you would send to backend

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  }

  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.contactContent}>
        {/* video */}
        <div className={styles.contactVideoContainer}>
          <video
            src="/videos/Contact/pizza.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={styles.contactVideo}
          />
          <div className={styles.videoLines}>
            <div className={`${styles.line} ${styles.line1}`} />
            <div className={`${styles.line} ${styles.line2}`} />
            <div className={`${styles.line} ${styles.line3}`} />
          </div>
        </div>

        {/* form */}
        <form className={styles.contactUsForm} onSubmit={handleSubmit}>
          <div className={styles.contactUsHeading}>
            <h2>contact us</h2>
            <h3>
              Have questions? Want to hear more details? Reach out to us!
            </h3>
          </div>

          <div className={styles.contactUsInputs}>
            <input
              className={styles.contactUsInput}
              type="text"
              name="name"
              placeholder="Full Name"
              maxLength={20}
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              className={styles.contactUsInput}
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="How can we help?"
              className={`${styles.contactUsInput} ${styles.contactUsTextarea}`}
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              className={`${styles.contactUsInput} ${
                isClicked ? styles.sendButtonClicked : styles.sendButton
              }`}
              type="submit"
            >
              {isClicked ? "SENT!" : "SEND"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;