import React from "react";
import style from "./blogPreview.module.css";
import type { Blog } from "@/database/blogSchema";
import Link from "next/link";
import Image from "next/image";

export default function BlogPreview(props: Blog) {
  const blog = props._doc || props; 

  return (
    <div className={style.blogCard}>
      <Link href={`/blog/${blog.slug}`}>
        <h2 className={style.blogTitle}>{blog.title}</h2>
        <div className={style.blogContent}>
          <div className={style.blogImage}>
            <Image
              src={blog.image?.startsWith('/') ? blog.image : `/${blog.image || 'media/default.jpg'}`}
              alt={blog.imageAlt || 'Default blog image'}
              width={500}
              height={300}
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
          <div className={style.blogInfo}>
            <p className={style.blogDescription}>{blog.caption}</p>
            <p className={style.blogDate}>{new Date(blog.date).toLocaleDateString()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
