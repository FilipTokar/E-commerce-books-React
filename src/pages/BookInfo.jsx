import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/UI/Rating";
import Price from "../components/UI/Price";

export default function BookInfo({ books }) {
    const { id } = useParams()
    const book = books.find(book => +book.id === +id)
    console.log(book)
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  {book.title}
                </h2>
                <Rating rating={book.rating}/>
                <div className="book__selected--price">
                  <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                </div>
                <div className="book__summary">
                  <h3 className="book__summarry--title">Summary</h3>
                  <p className="book__summary--para">
                    {book.firstPara}
                  </p>
                  <p className="book__summary--para">
                    {book.secondPara}
                  </p>
                </div>
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
            <div className="row">
              <div className="book__selected--top">
                <h2 className="book__selected--title-top">
                    Recommended Books
                </h2>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}
