"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    method: "",
    handle: "",
    comments: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    if (!formData.name || !formData.comments) {
      setStatus("Error: Please fill out all required fields.");
      return;
    }

    try {
      setStatus("Sending...");

      const result = await emailjs.send(
        "service_ej0h71l",  
        "template_pnaqwyp", 
        {
          name: formData.name,
          method: formData.method,
          handle: formData.handle,
          comments: formData.comments,
        },
        "OIWefr6-vwbD-3X4L" 
      );

      if (result.text === "OK") {
        setStatus("Message sent successfully!");
        setFormData({ name: "", method: "Email", handle: "", comments: "" });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Error: Failed to send message.");
    }
  };

  return (
    <main>
      <h1 className="pageTitle">Contact Me</h1>
      <div className={styles.contact}>
        <p className={styles.contactText}>
          Leave your contact details down below and I'll get back to you!
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br /><br />
          <label className={styles.label} htmlFor="method">
            Method of Contact
          </label>
          <select
            id="method"
            name="method"
            value={formData.method}
            onChange={handleChange}
          >
            <option value="Email">Email</option>
            <option value="Instagram">Instagram</option>
            <option value="Text">Text</option>
          </select>
          <br /><br />
          <label className={styles.label} htmlFor="handle">
            Handle
          </label>
          <input
            className={styles.input}
            type="text"
            id="handle"
            name="handle"
            placeholder="Email/Handle/Number"
            value={formData.handle}
            onChange={handleChange}
          />
          <br /><br />
          <label className={styles.label} htmlFor="comments">
            Comments
          </label>
          <textarea
            className={styles.textarea}
            id="comments"
            name="comments"
            placeholder="Comments"
            value={formData.comments}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <input className={styles.button} type="submit" value="Submit" />
        </form>
        {status && <p className={styles.status}>{status}</p>}
      </div>
    </main>
  );
}
