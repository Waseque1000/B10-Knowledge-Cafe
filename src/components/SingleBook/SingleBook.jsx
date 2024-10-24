import React from "react";

const SingleBook = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-300 p-5 m-4 rounded-xl">
      <h3 className="text-2xl pb-3">{title}</h3>
    </div>
  );
};

export default SingleBook;
