import React from "react";
import style from "./blogPreview.module.css";
import { Blog } from "@/app/static/blogData";
import Link from "next/link";
import Image from "next/image";

export default function BlogPreview(props: Blog) {
    return (
      <div className={style.blogCard}>
        <Link href={`/blog/${props.slug}`}>
          <h2 className={style.blogTitle}>{props.title}</h2>
          <div className={style.blogContent}>
            <div className={style.blogImage}>
              <Image
                src={props.image.startsWith('/') ? props.image : `/${props.image}`}
                alt={props.imageAlt}
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
              <p className={style.blogDescription}>{props.caption}</p>
              <p className={style.blogDate}>{props.date}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }