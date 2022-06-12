import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/61FyIO6yVaL._AC_UL302_SR302,200_.jpg"
    alt="The Wonderful Things You Will Be"
  />
);

const Title = () => <h1>The Wonderful Things You Will Be</h1>;
const Author = () => <h4>Emily Winfield Martin</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
