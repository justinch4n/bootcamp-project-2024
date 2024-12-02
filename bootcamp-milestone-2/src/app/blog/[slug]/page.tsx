import React from "react";
import Image from "next/image";
import styles from "../blogPages.module.css";
import blogs from "@/app/static/blogData";  // Adjust this import path based on where your blogData is located

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  return (
    <main>
      <h1 className="pageTitle">{blog.title}</h1>
      <div className={styles.blogPage}>
        <div className={styles.blogImg}>
          <Image 
            src={blog.image}
            alt={blog.imageAlt}
            width={800}
            height={600}
          />
        </div>
        <div className={styles.blogText}>
          <p>{blog.description}</p>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}