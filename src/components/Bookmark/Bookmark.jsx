import SingleBook from "../SingleBook/SingleBook";

const Bookmark = ({ boookmarks, readingtime }) => {
  console.log(readingtime);
  return (
    <div className="w-1/3 bg-gray-100">
      <h2 className="text-center m-3 text-3xl font-bold">
        {" "}
        Readingtime :{readingtime}
      </h2>
      <h2 className="text-3xl mb-3 font-bold text-center">
        Bookmark {boookmarks.length}
      </h2>

      {boookmarks.map((bookmark, idx) => (
        <SingleBook key={idx} bookmark={bookmark}></SingleBook>
      ))}
    </div>
  );
};

export default Bookmark;
