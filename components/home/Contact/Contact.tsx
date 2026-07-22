"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LazyVideo from "@/components/global/LazyVideo/LazyVideo";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import styles from "./Contact.module.scss";

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) newErrors.email = "Please enter your email";
    if (!formData.message.trim()) newErrors.message = "Please enter a message";

    setErrors(newErrors);

    // if any errors, stop
    if (newErrors.name || newErrors.email || newErrors.message) return;

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

    tl.to(rightLeafRef.current, { y: -300 }, 0).to(
      leftLeafRef.current,
      { y: 300 },
      0,
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.contactContent}>
        {/* video */}
        <div className={styles.contactVideoContainer}>
          <LazyVideo
            src="/videos/Contact/pizza.mp4"
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
            <p>
              Have a question about our menu, private dining, or special events?
              We’d be delighted to hear from you.
            </p>
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
            />
            {errors.name && (
              <span className={styles.errorMsg}>{errors.name}</span>
            )}

            <input
              className={styles.contactUsInput}
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className={styles.errorMsg}>{errors.email}</span>
            )}

            <textarea
              name="message"
              placeholder="How can we help?"
              className={`${styles.contactUsInput} ${styles.contactUsTextarea}`}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span className={styles.errorMsg}>{errors.message}</span>
            )}

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
        <Image
          ref={rightLeafRef}
          className={styles.rightLeaf}
          src="/images/Contact/right-leaf.png"
          alt="leaf"
          width={100}
          height={220}
          style={{ objectFit: "contain", width: "auto", height: "auto" }}
        />
        <Image
          ref={leftLeafRef}
          className={styles.leftLeaf}
          src="/images/Contact/left-leaf.png"
          alt="leaf"
          width={100}
          height={200}
          style={{ objectFit: "contain", width: "auto", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default Contact;
