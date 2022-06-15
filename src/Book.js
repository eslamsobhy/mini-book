import React from "react";

const Book = ({ img, title, author, alt }) => {
  // const { img, title, author, alt } = props;

  return (
    <article className="book">
      <img src={img} alt={alt} />
      <h1 title={title}>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
