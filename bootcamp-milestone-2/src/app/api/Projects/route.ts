import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

export async function GET() {
    await connectDB();

    try {
        const projects = await Project.find({});
        return NextResponse.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json({ error: "Internal Server Error." }, { status: 500 });
    }
}
