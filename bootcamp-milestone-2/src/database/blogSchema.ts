import mongoose, { Schema, model, models } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
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

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  caption: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  slug: { type: String, required: true },
  comments: { type: Array, default: [] },
});

const Blog = models.Blog || model<Blog>("Blog", blogSchema);

export default Blog;
