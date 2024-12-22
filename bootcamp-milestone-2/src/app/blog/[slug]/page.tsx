import React from "react";
import Image from "next/image";
import styles from "../blogPages.module.css";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import Comment from "@/components/comment";
import { IComment } from "@/database/blogSchema";
import CommentForm from "@/components/commentForm";

type BlogPostProps = {
  params: { slug: string };
};

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  // Connect to the database
  await connectDB();

  // Fetch the blog by slug
  const blog = await BlogModel.findOne({ slug }).exec();

  if (!blog) {
    return (
      <main>
        <h1 className="pageTitle">Blog Not Found</h1>
        <p>
          The blog post you are looking for does not exist. Please check the URL
          or go back to the <a href="/blog">blogs page</a>.
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1 className="pageTitle">{blog.title}</h1>
      <div className={styles.blogPage}>
        <div className={styles.blogImg}>
          <Image
            src={blog.image || "/media/default.jpg"} // Fallback to default image
            alt={blog.imageAlt || "Default image"} // Fallback to default alt text
            width={800}
            height={600}
          />
        </div>
        <div className={styles.blogText}>
          <p>{blog.description}</p>
        </div>
      </div>
      <div className={styles.comment}>
        <h4 className={styles.commentTitle}>Comments:</h4>
        {blog.comments?.length > 0 ? (
          blog.comments.map((comment: IComment, idx: number) => (
            <Comment key={idx} comment={comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
      <CommentForm slug={slug} />
    </main>
  );
}
