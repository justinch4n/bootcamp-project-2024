"use client";

import { useState } from "react";
import styles from "./commentForm.module.css";

export default function CommentForm({ slug }: { slug: string }) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(""); // Reset the status message
  
    if (!user.trim() || !comment.trim()) {
      setStatus("Name and comment are required.");
      return;
    }
  
    try {
      const res = await fetch(`/api/Projects/${slug}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: user.trim(), comment: comment.trim() }),
      });
  
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to post comment");
      }
  
      const data = await res.json();
      setStatus(data.message || "Comment added successfully!");
      setUser(""); // Reset the form fields
      setComment("");
    } catch (error: any) {
      console.error("Error posting comment:", error);
      setStatus(`Error: ${error.message}`);
    }
    console.log("Form Data Sent:", { user, comment });

  };
  

  return (
    <form onSubmit={handleSubmit} className={styles.commentForm}>
      <div>
        <label htmlFor="user" className={styles.label}>Name:</label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div>
        <label htmlFor="comment" className={styles.label}>Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className={styles.textarea}
        ></textarea>
      </div>
      <button type="submit" className={styles.button}>Post Comment</button>
      {status && <p>{status}</p>} {/* Display success or error message */}
    </form>
  );
}
