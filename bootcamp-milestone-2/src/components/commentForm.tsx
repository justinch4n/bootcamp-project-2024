"use client";

import { useState } from "react";
import styles from "./commentForm.module.css";

export default function CommentForm({ slug }: { slug: string }) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    try {
      const res = await fetch(`/api/Blogs/${slug}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, comment }),
});

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to post comment");
      }

      setStatus("Comment added successfully!");
      setUser("");
      setComment("");
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
    }
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
      {status && <p>{status}</p>}
    </form>
  );
}
