// app/portfolio/page.tsx
import React from 'react';
import ProjectCard from '@/components/projectCard';
import CommentForm from '@/components/CommentForm'; // Import the CommentForm component
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";
import styles from './portfolio.module.css';


interface IProject {
  _id: string;
  image: string;
  image_alt: string;
  title: string;
  description: string;
  link: string;
  comments: { user: string; content: string; createdAt: Date }[];
}

const PortfolioPage = async (): Promise<JSX.Element> => {
  await connectDB();

  let projects: IProject[] = [];

  try {
    projects = await ProjectModel.find().sort({ date: -1 });

    projects = projects.map((project) => {
      const projectObject = project.toObject();
      const comments = projectObject.comments || [];

      return {
        _id: projectObject._id.toString(),
        image: projectObject.image || 'media/default.jpg',
        image_alt: projectObject.image_alt || 'Default project image',
        title: projectObject.title || 'Untitled Project',
        description: projectObject.description || 'No description available.',
        link: projectObject.link || '#',
        comments: comments,
      };
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <div>
      <h1 className='pageTitle'>Portfolio</h1>
      <div>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id}>
              <ProjectCard project={project} />
              <div className={styles.commentsSection}>

                <h3 className={styles.commentTitle}>Comments</h3>
                {project.comments.length > 0 ? (
                project.comments.map((comment, index) => (
                <div key={index} className={styles.comment}>
                  <p><strong>{comment.user || "Anonymous"}</strong></p> {/* Include the user name */}
                  <p>{comment.comment}</p> {/* Access "comment" field */}
                  <small>{new Date(comment.date).toLocaleString()}</small> {/* Access "date" field */}
                </div>
                ))
                ) : (
                <p className={styles.comment}>No comments yet.</p>
                )}

                {/* Comment Form */}
                <CommentForm slug={project._id} />
              </div>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
