import React from "react";
import ProjectCard from "@/components/projectCard";
import CommentForm from "@/components/commentForm";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";
import styles from "./portfolio.module.css";

interface IComment {
  user: string;
  comment: string;
  date: Date;
}

interface IProject {
  _id: string;
  image: string;
  image_alt: string;
  title: string;
  description: string;
  link: string;
  comments: IComment[];
}

const PortfolioPage = async (): Promise<JSX.Element> => {
  await connectDB();

  let projects: IProject[] = [];

  try {
    const results = await ProjectModel.find().sort({ date: -1 });

    projects = results.map((project) => ({
      _id: project._id.toString(),
      image: project.image || "media/default.jpg",
      image_alt: project.image_alt || "Default project image",
      title: project.title || "Untitled Project",
      description: project.description || "No description available.",
      link: project.link || "#",
      comments: project.comments || [],
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <div>
      <h1 className="pageTitle">Portfolio</h1>
      <div>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div className={styles.projectCommentContainer} key={project._id}>
              <ProjectCard project={project} />
              <div className={styles.commentsSection}>
                <h3 className={styles.commentTitle}>Comments</h3>
                {project.comments.length > 0 ? (
                  project.comments.map((comment, index) => (
                    <div key={index} className={styles.comment}>
                      <p>
                        <strong>{comment.user || "Anonymous"}</strong><br/>
                        {comment.comment}
                      </p>
                      <small>{new Date(comment.date).toLocaleString()}</small>
                    </div>
                  ))
                ) : (
                  <p className={styles.comment}>
                  No comments yet.</p>
                )}
                <CommentForm id={project._id} type="project" />
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
