import React from 'react';
import style from './projectCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: {
    _id: string;
    image: string;
    image_alt: string;
    title: string;
    description: string;
    link: string;
    comments: { user: string; comment: string; date: Date }[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={style.project}>
      <Image
        src={project.image}
        alt={project.image_alt}
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
};

export default ProjectCard;
