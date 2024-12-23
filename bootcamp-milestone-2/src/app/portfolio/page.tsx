import ProjectCard from '@/components/projectCard';
import React from 'react';
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema"

async function getProjects() {
  await connectDB();

  try {
    const projects = await ProjectModel.find().sort({ date: -1 });
    return projects.map((project) => ({
      _id: project._id,
      image: project.image || 'media/default.jpg',
      image_alt: project.image_alt || 'Default project image',
      title: project.title || 'Untitled Project',
      description: project.description || 'No description available.',
      link: project.link || '#',
    }));
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [];
  }
}


export default async function Project() {
  const projects = await getProjects();
  return (
    <main>
      <h1 className="pageTitle">Projects</h1>
      {projects && projects.length > 0 ? (
        projects.map((project) => <ProjectCard key={project._id} {...project} />)
      ) : (
        <p>No projects yet...<br />Come back later!</p>
      )}
    </main>
  );
}