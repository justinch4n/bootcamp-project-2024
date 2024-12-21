import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";

export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
  console.log("POST request received");
  await connectDB();

  const { slug } = params;
  console.log("Slug:", slug);

  try {
    const { user, comment } = await req.json();
    console.log("Received data:", { user, comment });

    if (!user || !comment) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const blog = await BlogModel.findOneAndUpdate(
      { slug },
      { $push: { comments: { user, comment, time: new Date() } } },
      { new: true }
    );

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
