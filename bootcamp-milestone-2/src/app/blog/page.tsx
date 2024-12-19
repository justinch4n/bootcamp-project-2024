import BlogPreview from '@/components/blogPreview';
import React from 'react';
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema"

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await BlogModel.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Blog() {
    const blogs = await getBlogs();
  
    return (
      <main>
        <h1 className="pageTitle">Blogs</h1>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => <BlogPreview key={blog._id} {...blog} />)
        ) : (
          <p>No blogs yet...<br></br>Come back later!</p>
        )}
      </main>
    );
  }