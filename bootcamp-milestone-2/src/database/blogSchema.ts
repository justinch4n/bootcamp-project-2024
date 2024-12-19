import mongoose, { Schema, model, models } from "mongoose";

// TypeScript type for the Blog model
type Blog = {
    title: string;
    date: Date;
    caption: string;
    description: string;
    image: string;
    image_alt: string;
    slug: string;
    comments?: any[]; // Update this if you have a defined type for comments
};

// Mongoose schema
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
    caption: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    slug: { type: String, required: true },
    comments: { type: Array, required: false, default: [] }, // Optional field
});

// Mongoose model
const Blog = models.Blog || model<Blog>("Blog", blogSchema);

export default Blog;
