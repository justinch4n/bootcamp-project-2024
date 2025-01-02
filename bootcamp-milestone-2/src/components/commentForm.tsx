"use client";

import { useState } from "react";
import styles from "./commentForm.module.css";

export default function CommentForm({ id, type }: { id: string; type: "blog" | "project" }) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("");

      try {
          const endpoint = type === "blog" 
              ? `/api/Blogs/${id}/comments` 
              : `/api/Projects/comments?id=${id}`;

          const response = await fetch(endpoint, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ user, comment }),
          });

          if (!response.ok) {
              throw new Error((await response.json()).error || "Failed to post comment");
          }

          setStatus("Comment added successfully!");
          setUser("");
          setComment("");
      } catch (error: any) {
          setStatus(`Error: ${error.message}`);
      }
  };

  return (
      <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.label}>Leave a Comment</h2>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input className={styles.input}
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Name"
              required
          />
          <br /><br />
          <label className={styles.label} htmlFor="comments">
            Comments
          </label>
          <textarea className={styles.textarea}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comment"
              required
          />
          <button className={styles.button} type="submit">Post Comment</button>
          {status && <p>{status}</p>}
      </form>
  );
}
