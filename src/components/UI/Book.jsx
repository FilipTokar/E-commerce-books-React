import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

export default function Book ({book}) {
    return (
        <div className="book">
        <Link to="/books/1">
          <figure className="book__img--wrapper">
            <img
              className="book__img"
              src={book.url}
              alt=""
            />
          </figure>
        </Link>
        <div className="book__title">
          <Link to="/books/1" className="book__title--link">
            {book.title}
          </Link>
        </div>
        <Rating rating={book.rating}/>
        <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
      </div>
    )
}