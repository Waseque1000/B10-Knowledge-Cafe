import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import "./App.css";
import Bookmark from "./components/Bookmark/Bookmark";
import { useState } from "react";

function App() {
  const [boookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadingtime] = useState(0);

  const handleAddBookmarks = (blog) => {
    console.log(blog);
    const newBookmarks = [...boookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (blog) => {
    setReadingtime(readingtime + blog.reading_time);
    console.log(blog.reading_time);

    // //  remobe the read blog from the bookmarks
    const remainingBookmarks = boookmarks.filter(
      (bookmark) => bookmark.id !== blog.id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <div className="m-5">
      <Header />
      <div className=" mt-10 flex justify-between">
        <Blogs
          handleAddBookmarks={handleAddBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmark boookmarks={boookmarks} readingtime={readingtime}></Bookmark>
      </div>
    </div>
  );
}

export default App;
