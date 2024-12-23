import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/database/db";
import projectSchema from "@/database/projectSchema";

type IParams = {
		params: Promise<{
			slug: string
		}>
}

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB(); // function from db.ts before
    const {slug} = await params;

    try {
        const blog = await projectSchema.findOne({slug}).orFail();
        return NextResponse.json(blog);
    } catch{
        return NextResponse.json('Blog not found.', { status: 404 });
    }
}
