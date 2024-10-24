import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBookmarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          handleAddBookmarks={handleAddBookmarks}
          handleMarkAsRead={handleMarkAsRead}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
