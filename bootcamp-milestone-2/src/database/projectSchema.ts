import mongoose, { Schema, model, models } from "mongoose";

export type Project = {
  title: string;
  description: string;
  image: string;
  image_alt: string;
  link: string;
};

const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  link: { type: String, required: true },
});

const Project = models.Project || model<Project>("Project", projectSchema);

export default Project;
