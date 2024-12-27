import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

interface CommentRequest {
  user: string;
  content: string;
}

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

    const body: CommentRequest = await req.json();

    if (!body.user || !body.content) {
      return NextResponse.json(
        { error: "User and content are required" },
        { status: 400 }
      );
    }

    await Blog.updateOne(
      { slug },
      { $push: { comments: { user: body.user, comment: body.content, date: new Date() } } }
    );

    return NextResponse.json({ message: "Comment added successfully!" }, { status: 201 });
  } catch (error: unknown) {
    console.error("Error saving comment:", error);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}
