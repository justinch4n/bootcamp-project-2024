import mongoose, { Schema, model, models, Document } from "mongoose";

interface IComment {
  user: string;
  comment: string;
  date: Date;
}

interface IProject extends Document {
  _id: string;
  image: string;
  image_alt: string;
  title: string;
  description: string;
  link: string;
  comments: IComment[]; 
}

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: false },
  link: { type: String, required: true },
  comments: [commentSchema], 
});

const Project = models.Project || model<IProject>("Project", projectSchema);

export default Project;
