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

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://th.bing.com/th/id/OIP.7OUfl03Em5I9haNN4r0AuQHaHp?w=188&h=193&c=7&r=0&o=5&pid=1.7"
    alt="I Love You to the Moon and Back"
  />
);

const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => (
  <h4
    style={{
      color: "#617d98",
      fontSize: "0.75rem",
      marginTop: "0.25rem",
      letterSpacing: "5px",
    }}
  >
    Amelia Hepworth
  </h4>
);

ReactDom.render(<Container />, document.getElementById("root"));
