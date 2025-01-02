import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const projectId = req.nextUrl.searchParams.get("id");
    if (!projectId) {
      return NextResponse.json(
        { error: "Project ID is required." },
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

    const updatedProject = await ProjectModel.findByIdAndUpdate(
      projectId,
      { $push: { comments: { user, comment, date: new Date() } } },
      { new: true }
    );

    if (!updatedProject) {
      return NextResponse.json(
        { error: "Project not found for the provided ID." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Comment added successfully!", project: updatedProject },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}
