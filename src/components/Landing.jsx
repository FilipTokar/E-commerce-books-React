import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <section id='landing'>
        <div className="header__container">
            <div className="header__description">
                <h1>Most visited online library platform</h1>
                <h2>Find your favourite book with <span className="purple">Library</span></h2>
                <Link to="/books">
                    <button className="btn">Browse books</button>
                </Link>
            </div>
            <figure className='header__img--wrapper'>
                <img src={UndrawBooks} alt="" />
            </figure>
        </div>
    </section>
  )
}
