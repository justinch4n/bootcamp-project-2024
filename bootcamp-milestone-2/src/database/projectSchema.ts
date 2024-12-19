import mongoose, { Schema, model, models } from "mongoose";

// TypeScript type for the Project model
type Project = {
    title: string;
    description: string;
    image: string;
    image_alt: string;
    link: string;
};

// Mongoose schema
const projectSchema = new Schema<Project>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    link: { type: String, required: true }
});

// Mongoose model
const Project = models.Project || model<Project>("Project", projectSchema);

export default Project;
