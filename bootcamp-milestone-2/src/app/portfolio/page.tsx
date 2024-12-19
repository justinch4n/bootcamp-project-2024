import ProjectCard from '@/components/projectCard';
import React from 'react';
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema"

async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await ProjectModel.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
	    return null
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
          <p>No projects yet...<br></br>Come back later!</p>
        )}
      </main>
    );
  }