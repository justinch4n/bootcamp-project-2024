import { NextResponse } from "next/server";
import Project from "@/database/projectSchema"; // adjust to your import
import connectDB from "@/database/db"; // adjust to your DB connection utility

export async function POST(request: Request) {
  try {
    // Connect to the database
    await connectDB();

    // Extract project ID from the URL
    const urlParts = request.url.split("/");
    const projectId = urlParts[urlParts.length - 2]; // Assuming `slug` is in the URL

    // Parse the request body
    // Parse and validate the request body
    const { user, comment } = await request.json();
    if (!user || typeof user !== "string" || !user.trim()) {
      return NextResponse.json({ error: "User is required and must be a non-empty string" }, { status: 400 });
    }
    if (!comment || typeof comment !== "string" || !comment.trim()) {
      return NextResponse.json({ error: "Comment is required and must be a non-empty string" }, { status: 400 });
    }
    // Find the project by ID
    const project = await Project.findById(projectId);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    console.log("Received Data in API:", { user, comment });


    // Ensure `image_alt` exists and set a default value if missing
    if (!project.image_alt) {
      project.image_alt = "Default image alt text"; // Assign default value
    }

    // Create a new comment
    const newComment = {
      user: user || "Anonymous", // Default to "Anonymous" if user is not provided
      comment,
      date: new Date(),
    };

    // Add the new comment to the project's comments array
    project.comments.push(newComment);

    // Save the project with the updated data
    await project.save();

    return NextResponse.json({ message: "Comment added successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error adding comment:", JSON.stringify(error, Object.getOwnPropertyNames(error)));
    return NextResponse.json({ error: "Failed to add comment" }, { status: 500 });
  }
}
