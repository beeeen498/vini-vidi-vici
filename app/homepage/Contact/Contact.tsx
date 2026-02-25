"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import styles from "./Contact.module.scss";

const Contact = () => {
  const headerHeight = 70;
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

    setTimeout(() => {
      setIsClicked(false);
    }, 2500);

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  }

  // animate leaves
  const rightLeafRef = useRef<HTMLImageElement | null>(null);
  const leftLeafRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!rightLeafRef.current || !leftLeafRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top top+=70",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(rightLeafRef.current, { y: -300 }, 0)
      .to(leftLeafRef.current, { y: 300 }, 0);

    return () => {
      tl.kill();
    };
  }, []);

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
            <h2>Get in Touch</h2>
            <h3>
              Have a question about our menu, private dining, or special events? 
              We’d be delighted to hear from you.
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

      {/* leaves */}
      <div className={styles.leavesDiv}>
        <img 
          ref={rightLeafRef}
          className={`${styles.rightLeaf}`}
          src="/images/Contact/right-leaf.png" 
          alt="leaf" 
        />
        <img 
          ref={leftLeafRef}
          className={`${styles.leftLeaf}`}
          src="/images/Contact/left-leaf.png" 
          alt="leaf" 
        />
      </div>
    </section>
  );
};

export default Contact;