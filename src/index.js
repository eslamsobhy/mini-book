import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

// SETUP VARIABLES:

//List of books (objects)
const books = [
  {
    id: 0,
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
    alt: "I Love You to the Moon and Back",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },

  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL604_SR604,400_.jpg",
    alt: "Ugly Love: A Novel",
    title: "Ugly Love: A Novel",
    author: "Colleen Hoover",
  },

  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL._AC_UL604_SR604,400_.jpg",
    alt: "The Alchemist, 25th Anniversary: A Fable About Following Your Dream",
    title:
      "The Alchemist, 25th Anniversary: A Fable About Following Your Dream",
    author: "Paulo Coelho",
  },

  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/71guj5WgRQL._AC_UL604_SR604,400_.jpg",
    alt: "The Postmodern Pilgrim's Progress: An Allegorical Tale",
    title: "The Postmodern Pilgrim's Progress: An Allegorical Tale",
    author: "Kyle Mann",
  },

  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/71KPMr-rEqL._AC_UL604_SR604,400_.jpg",
    alt: "Exceptionally Bad Dad Jokes: So frightfully awful.. yet wonderfully spiffing",
    title:
      "Exceptionally Bad Dad Jokes: So frightfully awful.. yet wonderfully spiffing",
    author: "Spiffy McChappy",
  },

  {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/71Q+cIeZWKL._AC_UL604_SR604,400_.jpg",
    alt: "Scars and Stripes: An Unapologetically American Story of Fighting the Taliban, UFC Warriors, and Myself",
    title:
      "Scars and Stripes: An Unapologetically American Story of Fighting the Taliban, UFC Warriors, and Myself",
    author: "Tim Kennedy",
  },

  {
    id: 6,
    img: "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL604_SR604,400_.jpg",
    alt: "The 48 Laws of Power",
    title: "The 48 Laws of Power",
    author: "Robert Greene",
  },

  {
    id: 7,
    img: "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL604_SR604,400_.jpg",
    alt: "Reminders of Him: A Novel",
    title: "Reminders of Him: A Novel",
    author: "Colleen Hoover",
  },

  {
    id: 8,
    img: "https://images-na.ssl-images-amazon.com/images/I/71ZVzeVj1RL._AC_UL604_SR604,400_.jpg",
    alt: "Sparring Partners (Jake Brigance)",
    title: "Sparring Partners (Jake Brigance)",
    author: "John Grisham",
  },
];

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
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, alt } = props;
  return (
    <article className="book">
      <img src={img} alt={alt} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<Container />, document.getElementById("root"));
