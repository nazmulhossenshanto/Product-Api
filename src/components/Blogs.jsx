import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className=" flex justify-between gap-5">
     <div className="w-1/2 border-red-500 p-5 border rounded-lg">
         {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
     </div>
     <div className="w-1/2">
      <h1 className="text-center">Reading Time :</h1>
      <h1 className="text-center">Bookmark Count :</h1>
     </div>
    </div>
  );
};

export default Blogs;
