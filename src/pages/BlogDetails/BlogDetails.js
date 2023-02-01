import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blog = useLoaderData()
  console.log(blog)
  return (
    <div>
      <div className="card my-20 bg-base-100 shadow-xl">
        <figure>
          <img
            src={blog.blog_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.blog_name}</h2>
          <p>{blog.blog_details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
