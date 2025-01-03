import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const slug = req.nextUrl.pathname.split("/api/Blogs/")[1]?.split("/")[0];
    if (!slug) {
      return NextResponse.json(
        { error: "Slug is missing from the request URL." },
        { status: 400 }
      );
    }

    const { user, comment }: { user: string; comment: string } = await req.json();
    if (!user || !comment) {
      return NextResponse.json(
        { error: "Both 'user' and 'comment' fields are required." },
        { status: 400 }
      );
    }

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: { user, comment, date: new Date() } } },
      { new: true } // Return the updated document
    );

    if (!updatedBlog) {
      return NextResponse.json(
        { error: "Blog not found for the provided slug." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Comment added successfully!", blog: updatedBlog }, { status: 201 });
  } catch (error) {
    console.error("Error saving comment:", error);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}
