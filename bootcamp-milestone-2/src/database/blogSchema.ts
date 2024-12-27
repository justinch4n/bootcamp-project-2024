import mongoose, { Schema, model, models } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  date: Date;
};

type Blog = {
  title: string;
  date: Date;
  caption: string;
  description: string;
  image: string;
  image_alt: string;
  slug: string;
  comments?: IComment[];
};

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  caption: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String },
  image_alt: { type: String, required: true, default: "Default alt text" }, // Add a default value
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
