import React from "react";
import style from "./projectCard.module.css";
import type { Project } from "@/database/projectSchema";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard(props: Project) {
    const project = props._doc || props; 

  return (
    <div className={style.project}>
        <Image
            src={project.image?.startsWith('/') ? project.image : `/${project.image || 'media/default.jpg'}`}
            alt={project.imageAlt || 'Default project image'}
            width={400}
            height={400}
            style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'cover',
            }}
        />
        
        <div className={style.projectDetails}>
            <p className={style.projectName}>{project.title}</p>
            <p className={style.projectDescription}>{project.description}</p>
            <Link href={project.link}>Learn More</Link>
        </div>
    </div>
  );
}