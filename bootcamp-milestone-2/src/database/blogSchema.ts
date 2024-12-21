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
    comments?: IComment[];
};

export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

const commentSchema = new Schema<IComment>({
    user: {type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true, default: Date.now },
})

// Mongoose schema
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
    caption: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    slug: { type: String, required: true },
    comments: { type: Array, required: false, default: [] },
});

// Mongoose model
const Blog = models.Blog || model<Blog>("Blog", blogSchema);

export default Blog;
