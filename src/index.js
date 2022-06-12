import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

// SETUP VARIABLES:

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
  alt: "I Love You to the Moon and Back",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL604_SR604,400_.jpg",
  alt: "Ugly Love: A Novel",
  title: "Ugly Love: A Novel",
  author: "Colleen Hoover",
};

const thirdBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL._AC_UL604_SR604,400_.jpg",
  alt: "The Alchemist, 25th Anniversary: A Fable About Following Your Dream",
  title: "The Alchemist, 25th Anniversary: A Fable About Following Your Dream",
  author: "Paulo Coelho",
};

const fourthBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71guj5WgRQL._AC_UL604_SR604,400_.jpg",
  alt: "The Postmodern Pilgrim's Progress: An Allegorical Tale",
  title: "The Postmodern Pilgrim's Progress: An Allegorical Tale",
  author: "Kyle Mann",
};

const fifthBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71KPMr-rEqL._AC_UL604_SR604,400_.jpg",
  alt: "Exceptionally Bad Dad Jokes: So frightfully awful.. yet wonderfully spiffing",
  title:
    "Exceptionally Bad Dad Jokes: So frightfully awful.. yet wonderfully spiffing",
  author: "Spiffy McChappy",
};

const sixthBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71Q+cIeZWKL._AC_UL604_SR604,400_.jpg",
  alt: "Scars and Stripes: An Unapologetically American Story of Fighting the Taliban, UFC Warriors, and Myself",
  title:
    "Scars and Stripes: An Unapologetically American Story of Fighting the Taliban, UFC Warriors, and Myself",
  author: "Tim Kennedy",
};

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
      <Book
        img={firstBook.img}
        alt={firstBook.alt}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        alt={secondBook.alt}
        author={secondBook.author}
        title={secondBook.title}
      />
      <Book
        img={thirdBook.img}
        alt={thirdBook.alt}
        author={thirdBook.author}
        title={thirdBook.title}
      />
      <Book
        img={fourthBook.img}
        alt={fourthBook.alt}
        author={fourthBook.author}
        title={fourthBook.title}
      />
      <Book
        img={fifthBook.img}
        alt={fifthBook.alt}
        author={fifthBook.author}
        title={fifthBook.title}
      />
      <Book
        img={sixthBook.img}
        alt={sixthBook.alt}
        author={sixthBook.author}
        title={sixthBook.title}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.alt} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<Container />, document.getElementById("root"));
