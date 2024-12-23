import ProjectCard from '@/components/projectCard';
import React from 'react';
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema"

async function getProjects() {
  await connectDB();

  try {
    const projects = await ProjectModel.find().sort({ date: -1 }).orFail();
    return projects;
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
      {Array.isArray(projects) && projects.length > 0 ? (
        projects.map((project) => <ProjectCard key={project._id} {...project} />)
      ) : (
        <p>No projects yet...<br />Come back later!</p>
      )}
    </main>
  );
}