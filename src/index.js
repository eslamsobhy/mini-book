import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const Container = () => {
  return (
    <div>
      <Header />
      <BookList />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Best Sellers</h1>
      <p>Our most popular products based on sales. Updated hourly.</p>
    </header>
  );
};

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const author = "Amelia Hepworth";
const title = "I Love You to the Moon and Back";
const image =
  "https://th.bing.com/th/id/OIP.7OUfl03Em5I9haNN4r0AuQHaHp?w=188&h=193&c=7&r=0&o=5&pid=1.7";
const alt = "I Love You to the Moon and Back";

const Book = () => {
  return (
    <article className="book">
      <img src={image} alt={alt} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<Container />, document.getElementById("root"));
