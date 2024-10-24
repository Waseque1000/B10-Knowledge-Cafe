import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddBookmarks, handleMarkAsRead }) => {
  const {
    cover,
    id,
    title,
    reading_time,
    author_img,
    posted_date,
    author,
    hashtags,
  } = blog;

  // console.log(reading_time);
  return (
    <div className="m-8">
      <img className="w-[85%]" src={cover} alt="" />
      <div className="flex mx-auto justify-between items-center">
        <div className="flex items-center mt-4 ">
          <img className="w-10 h-10 rounded-full" src={author_img} alt="" />
          <div className="pl-5">
            <h4>{author}</h4>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="pr-48">
          <button
            onClick={() => handleAddBookmarks(blog)}
            className="flex items-center"
          >
            {reading_time} min read
            <FaBookmark className="ml-1" />
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="m-3">
        {hashtags.map((hash) => (
          <span key={hash} className="mr-3">
            #{hash}
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(blog)}
        className="underline text-purple-800"
      >
        Mark as Read
      </button>
    </div>
  );
};

export default Blog;
