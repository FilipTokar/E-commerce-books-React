import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg'

export default function Landing() {
  return (
    <section id='landing'>
        <div className="header__container">
            <div className="header__description">
                <h1>Most visited online library platform</h1>
                <h2>Find your favourite book with <span className="purple">Library</span></h2>
                <a href="#features">
                    <button className="btn">Browse books</button>
                </a>
            </div>
            <figure className='header__img--wrapper'>
                <img src={UndrawBooks} alt="" />
            </figure>
        </div>
    </section>
  )
}
