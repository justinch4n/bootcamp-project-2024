import React from "react";
import style from "./projectCard.module.css";
import type { Project } from "@/database/projectSchema";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard(props: Project) {
  const {
    image = 'media/default.jpg', // Fallback to default image
    image_alt = 'Default project image',
    title = 'Untitled Project',
    description = 'No description available.',
    link = '#', // Default to a placeholder link
  } = props;

  return (
    <div className={style.project}>
      <Image
        src={image.startsWith('/') ? image : `/${image}`}
        alt={image_alt}
        width={400}
        height={400}
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
      <div className={style.projectDetails}>
        <p className={style.projectName}>{title}</p>
        <p className={style.projectDescription}>{description}</p>
        <Link href={link}>Learn More</Link>
      </div>
    </div>
  );
}
